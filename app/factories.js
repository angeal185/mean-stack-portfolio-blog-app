app.factory("myBlogFactory", function($http) {
    return {
        allBlogs: function() {
            return $http.get("/admin/blogs");
        },
        editBlog: function(id) {
            return $http.get("/admin/blog/" + id + "/edit");
        },
        updateBlog: function(blog) {
            return $http.post("/admin/blog/" + blog._id + "/update", blog);
        },
        deleteBlog: function(id) {
            return $http.post("/admin/blog/" + id + "/delete");
        },
        createBlog: function(blog) {
            return $http.post("/admin/blog/create", blog);
        }
    }
});
