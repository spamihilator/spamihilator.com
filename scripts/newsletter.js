angular.module('newsletter', ['address']);

function NewsletterCtrl($scope, $location, Address) {
  $scope.disabled = false;
  $scope.saving = false;
  
  var getParameter = function(paramName) {
    var searchString = window.location.search.substring(1);
    var params = searchString.split("&");
    
    for (var i=0; i < params.length; ++i) {
      var val = params[i].split("=");
      if (val[0] == paramName) {
        return unescape(val[1]);
      }
    }
    return null;
  }
  
  $scope.initSignout = function() {
    if ($scope.signout) {
      var addr = getParameter("address");
      if (addr)
        $scope.address = addr;
    }
  };
  
  $scope.buttonValue = function() {
    if ($scope.saving) {
      if ($scope.lang == "de")
        return "Speichere ...";
      else
        return "Saving ...";
    } else {
      if ($scope.signout) {
        if ($scope.lang == "de")
          return "Abmelden";
        else
          return "Sign out";
      } else {
        if ($scope.lang == "de")
          return "Anmelden";
        else
          return "Sign in";
      }
    }
  };
  
  $scope.successOrErrorMessage = function() {
    return $scope.successMessage || $scope.errorMessage;
  };
  
  var checkMailAddress = function() {
    if (!$scope.address || $scope.address == "") {
      if ($scope.lang == "de")
        $scope.errorMessage = "Bitte geben Sie eine E-Mail-Adresse ein.";
      else
        $scope.errorMessage = "Please enter a mail address.";
      $scope.successMessage = null;
      return false;
    }
    return true;
  };

  $scope.save = function() {
    if (!checkMailAddress()) {
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
  
  $scope.delete = function() {
    if (!checkMailAddress()) {
      return;
    }
    
    $scope.disabled = true;
    $scope.saving = true;
    Address.delete({"address": $scope.address, "lang": $scope.lang},
      function(response) {
        if ($scope.lang == "de")
          $scope.successMessage = "Sie haben sich erfolgreich vom Newsletter abgemeldet. Auf Wiedersehen!";
        else
          $scope.successMessage = "You have successfully signed out from our newsletter. Good Bye!";
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
            $scope.errorMessage = "Sie haben sich bereits vom Newsletter abgemeldet.";
          else
            $scope.errorMessage = "You already have signed out from the newsletter.";
          $scope.disabled = true;
        } else if (response.status == 404) {
          if ($scope.lang == "de")
            $scope.errorMessage = "Diese Adresse ist nicht in der Liste.";
          else
            $scope.errorMessage = "This address is not in the list.";
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
