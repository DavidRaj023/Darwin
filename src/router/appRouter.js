const express = require('express');
const router = new express.Router();
const appController = require('../controller/appController');
let routes = (app) => {
    try {
        router.get('/error', appController.get);
        app.use(router);    
    } catch (error) {
        console.log(error);
    }
};

module.exports = routes;