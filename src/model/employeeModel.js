const db = require('../config/db.config');

module.exports = {
    insertInfo : function(value, callback) {
        return db.query(`INSERT INTO information SET ?`, value, callback );
            
    }
}