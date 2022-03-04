const express = require('express');
const cors = require("cors");
const router = require('./routes');

class App {
    constructor(){
        this.app = express(); 
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use('/', router);
        this.app.use(express.urlencoded({
            extended: true
        }));
        this.listen();
    }

    listen(){
        this.app.listen(3000, () => {console.log("Listening on port 3000 ...")});
    }
}

new App();