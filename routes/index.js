var express     = require("express");
var router      = express.Router();
var blog        = require("../models/blog");



router.get("/", function(req, res) {
	res.render("client/index", {
		title: "portfolio"
	});
});


router.get("/about", function(req, res) {
	res.render("client/about", {
		title: "about"
	});
});

router.get("/services", function(req, res) {
	res.render("client/services", {
		title: "services"
	});
});

router.get("/portfolio", function(req, res) {
	res.render("client/portfolio", {
		title: "portfolio 1",
		img: "/images/single-img.jpg",
		client: "client 1",
		date: "jan 01 2016",
		category: "category 1",
		href: "#",
		header: "header 1",
		desc: "ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim",
	});
});

router.get("/contact", function(req, res) {
	res.render("client/contact", {
		title: "contact"
	});
});

router.get("/blog", function(req, res) {
    blog.find({}).sort({ created_at: -1 }).exec(function(err, blogs) {
        if(err) throw(err);

        res.render("client/blog", {
            title: "blog",
            blogs: blogs,
            url: "/blog"
        });
    });
});

router.get("/blog/test/:name/:id", function(req, res) {

    var name = req.params.name;
    var id = req.params.id;

    blog.findById(id, function(req, blog) {
       res.render("client/blog/blog", {
           title: name.split('-').join(' '),
           blog: blog,
           desc: blog.short_desc,
           url: "/blog/test/" + name + "/" + id
       })
    });
});

router.get("/login", function authenticatedOrNot(req, res, next) {
    if(req.isAuthenticated()) {
        res.redirect("/admin#/blogs");
    } else {
        next();
    }}, function(req, res) {

    res.render("admin/login", { message: req.flash('error') });
});

router.get("/logout", function(req, res) {
    req.logout();

    res.redirect("/login");
});

module.exports = router;
