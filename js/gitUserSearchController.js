githubUserSearch.controller('GitUserSearchController', function($scope, $resource) {

  var searchResource = $resource('https://api.github.com/search/users');
  var searchMessage = 'You searched for: '

  $scope.doSearch = function() {
  	$('#search_for').hide()
  	if ($scope.searchTerm != '') {
	    $scope.searchResult = searchResource.get({
	      q: $scope.searchTerm,
	      client_id: "d6dc6a59ba1cebdb9205",
	      client_secret: 'eb1e63221b5d03abd382de7075d5622ddb94e2c0'
	    });
	    $('#search_for').show()  	
	  }
  };
});