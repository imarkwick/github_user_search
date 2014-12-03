githubUserSearch.controller('GitUserSearchController', function($scope, $resource) {

  var searchResource = $resource('https://api.github.com/search/users');

  $scope.doSearch = function() {
    $scope.searchResult = searchResource.get({
      q: $scope.searchTerm
    });
    $scope.$apply();
  	// $scope.searchResult = {
	  // 	"items": [{
	  //     "login": "tansaku",
	  //     "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
	  //     "html_url": "https://github.com/tansaku"
	  //   }, {
	  //     "login": "stephenlloyd",
	  //     "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
	  //     "html_url": "https://github.com/stephenlloyd"
	  //   }]
   //  };
  };

});