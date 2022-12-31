const {writeFileSync} = require('fs');
const Sequelize = require('sequelize');
const sequelizeErd = require('sequelize-erd');

(async function(){
    const db = new Sequelize('./config/config.js');
    // Import DB models here
    const User = require('../models').User
    const svg = await sequelizeErd({ source: db }); // sequelizeErd() returns a Promise
    writeFileSync('./erd.svg', svg);

    // Writes erd.svg to local path with SVG file from your Sequelize models
})();