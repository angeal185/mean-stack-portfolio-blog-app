app.controller("ListDeleteCtrl", function($scope, $state, myBlogFactory) {

    $scope.blog = {};
    $scope.modal = false;

    myBlogFactory.allBlogs().then(function(res){
        $scope.blogs = res.data;
    });
    $scope.cancelModal = function() {
        $scope.modal = false;
    };
    $scope.showDeleteModal = function(id) {
        $scope.modal = true;
        $scope.modal = myBlogFactory.editBlog(id).then(function(res) {
            $scope.blog = res.data;
        });
    };
    $scope.deleteBlog = function(id) {
        myBlogFactory.deleteBlog(id).then(function(result) {
            if(result.data.success) {
                $state.go($state.current, {}, { reload: true });
            }
        });
    };
});

app.controller("CreateUpdateCtrl", function($scope, $state, $stateParams, myBlogFactory) {

    if($stateParams.id) {
        myBlogFactory.editBlog($stateParams.id).then(function(res) {
            $scope.blog = res.data;
        });
    }
    $scope.createBlog = function() {
        myBlogFactory.createBlog($scope.blog).then(function(result) {
            if(result.data.success) {
                $scope.blog = {};
                $state.go("admin-all-blogs");
            }
        });
    };
    $scope.updateBlog = function(blog) {
        myBlogFactory.updateBlog(blog).then(function(result) {
            if(result.data.success) {
                $state.go("admin-all-blogs");
            }
        });
    };
});
