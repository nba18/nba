const express = require("express");
const contacts = require("../controllers/contact.controller");

module.exports = app => {
    const routes = express.Router();

    routes.post("/", contacts.create);

    routes.get("/", contacts.findAll);

    routes.get("/favorite", contacts.findAllFavorite);

    routes.get("/:id", contacts.findOne);

    routes.put("/:id", contacts.update);

    routes.delete("/:id", contacts.delete);

    routes.delete("/", contacts.deleteAll);

    app.use("/api/contacts", routes);
};
