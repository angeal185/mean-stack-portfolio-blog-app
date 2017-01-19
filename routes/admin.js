var app             = require("express");
var router          = app.Router();
var blog            = require("../models/blog");
var User            = require("../models/user");

router.use(function authenticatedOrNot(req, res, next){
    if(req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/login");
    }
});

router.get("/", function(req, res) {
    res.render("admin/layouts/app.html");
});

router.get("/blogs-page", function(req, res) {
    res.render("admin/blog/index.html");
});

router.get("/blog/new", function(req, res) {
    res.render("admin/blog/create.html");
});

router.get("/blog/update", function(req, res) {
    res.render("admin/blog/update.html");
});

router.get("/blogs", function(req, res) {
    blog.find(function(err, blogs) {
        if(err) throw(err);

        res.json(blogs);
    });
});

router.get("/blog/:id/edit", function(req, res) {
    blog.findById(req.params.id, function(err, blog) {
        if(err) throw err;

        res.json(blog);
    });
});

router.post("/blog/create", function(req, res) {
    blog.create(req.body, function(err) {
        if(err) throw err;

        res.json({ success: true })
    });
});

router.post("/blog/:id/update", function(req, res) {

    blog.findByIdAndUpdate(req.params.id, req.body, function(err) {
        if(err) throw err;

        res.json({success: true});
    });
});

router.post("/blog/:id/delete", function(req, res) {
    blog.findByIdAndRemove(req.params.id, function(err) {
        if(err) throw err;

        res.json({success: true});
    });
});

module.exports = router;
