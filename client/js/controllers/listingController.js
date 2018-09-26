angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Listings could not be retrieved: ', error);
    });

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
      Listings.create($scope.newListing);
      location.reload();
    };

    $scope.deleteListing = function(index) {
      var list = $scope.listings[index];
      Listings.delete(listings._id);
      location.reload();
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);
