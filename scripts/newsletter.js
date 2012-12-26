angular.module('newsletter', ['address']);

function NewsletterCtrl($scope, Address) {
  $scope.disabled = false;
  $scope.saving = false;
  
  $scope.buttonValue = function() {
    if ($scope.saving) {
      if ($scope.lang == "de")
        return "Speichere ...";
      else
        return "Saving ...";
    } else {
      if ($scope.lang == "de")
        return "Speichern";
      else
        return "Save";
    }
  };
  
  $scope.successOrErrorMessage = function() {
    return $scope.successMessage || $scope.errorMessage;
  };

  $scope.save = function() {
    if (!$scope.address || $scope.address == "") {
      if ($scope.lang == "de")
        $scope.errorMessage = "Bitte geben Sie eine E-Mail-Adresse ein.";
      else
        $scope.errorMessage = "Please enter a mail address.";
      $scope.successMessage = null;
      return;
    }
    
    $scope.disabled = true;
    $scope.saving = true;
    Address.put({"address": $scope.address, "lang": $scope.lang},
      function(response) {
        if ($scope.lang == "de")
          $scope.successMessage = "Sie haben sich erfolgreich zum Newsletter angemeldet. Vielen Dank!";
        else
          $scope.successMessage = "You have successfully signed up to our newsletter. Thanks a lot!";
        $scope.disabled = true;
        $scope.saving = false;
        $scope.errorMessage = null;
      },
      function(response) {
        if (response.status == 400) {
          if ($scope.lang == "de")
            $scope.errorMessage = "Die E-Mail-Adresse ist ungültig.";
          else
            $scope.errorMessage = "This mail address is invalid.";
          $scope.disabled = false;
        } else if (response.status == 403) {
          if ($scope.lang == "de")
            $scope.errorMessage = "Sie haben sich bereits zum Newsletter angemeldet.";
          else
            $scope.errorMessage = "You have already signed up to the newsletter.";
          $scope.disabled = true;
        } else if (response.status == 409) {
          if ($scope.lang == "de")
            $scope.errorMessage = "Diese Adresse ist bereits in der Liste.";
          else
            $scope.errorMessage = "This address is already in the list.";
          $scope.disabled = false;
        } else {
          if ($scope.lang == "de")
            $scope.errorMessage = "Unbekannte Antwort vom Server: " + response.status;
          else
            $scope.errorMessage = "Unknown response from the server: " + response.status;
          $scope.disabled = false;
        }
        $scope.saving = false;
        $scope.successMessage = null;
      }
    );
  };
}
