githubUserSearch.controller('GitUserSearchController', function($scope, $resource) {

  var searchResource = $resource('https://api.github.com/search/users');
  var repoResource = $resource('https://api.github.com/repos/makersacademy/bookmark_manager/commits');
  var creds = {
      client_id: "d6dc6a59ba1cebdb9205",
      client_secret: 'eb1e63221b5d03abd382de7075d5622ddb94e2c0'
    };

  $scope.doSearch = function() {
  	$('#search_for').hide()

  	if ($scope.searchTerm != '') {
	    $scope.searchResult = searchResource.get({
	      q: $scope.searchTerm,
	      client_id: "d6dc6a59ba1cebdb9205",
	      client_secret: 'eb1e63221b5d03abd382de7075d5622ddb94e2c0'
	    });

      var searchRepo = repoResource.query(creds)

      var setCommitCount = function() {
        searchRepo.$promise.then(function(result) {
          $scope.repoCommitCount = result.length;
          var commits = 0;
          for (var i = 0; i < result.length; i++) {
            if (result[i].committer.login === $scope.searchTerm) {
              var commits = commits + 1
            }
          }
          $scope.userCommitCount = commits;
        })
      }
    
      setCommitCount();
      $('#search_for').show();
      $('#repos').show();
    }
  }
});