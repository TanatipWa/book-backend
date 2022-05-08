module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    var router = require("express").Router();

    router.get("/", tutorials.findAll);
    router.post("/", tutorials.create);
    router.get("/published", tutorials.findAllPublished);
    router.get("/:id", tutorials.findOne);
    router.delete("/:id", tutorials.delete);
    router.put("/:id", tutorials.update);

    app.use('/api/tutorials', router);
}