---
---
angular.module('address', ['ngResource']).
  factory('Address', function($resource) {
    var Address = $resource("{{ site.newsletterserviceurl | replace:':','\\\\:' | replace:'http\\://','http://' }}/addresses/:address", {
      "address": "@address",
      "lang": "@lang"
    }, {
      "put": { "method": "PUT" }
    });
    return Address;
  });
