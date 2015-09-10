var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {

  this.getUsers = function() {
    var deferred = $q.defer();
      //returns an object with .then --all promise have .then()

     $http({
        method: 'GET',
        url: 'http://reqr.es/api/users?page=1'
    }).then(function(response){
      var parsedResponse = response.data.data;

      for(var i = 0; i < parsedResponse.length; i++) {
        parsedResponse[i].first_name = 'Ralf'
      }

      //below tells us to run the sucess of the then() methods
      deferred.resolve(parsedResponse)
    });
    //an object of deferred - promise has the .then method
    return deferred.promise;


  }

});
