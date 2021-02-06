const convict = require('convict');

let config = convict({
    authToken: {
        format: String,
        default: 'X-Authorization'
    },
    db: {
        host: { // host, rather than hostname, as mysql connection string uses 'host'
            format: String,
            default: "mudfoot.doc.stu.mmu.ac.uk"
        },
        port: {
            format: Number,
            default: 6306
        },
        user: {
            format: String,
            default: 'rashids'
        },
        password: {
            format: String,
            default: 'blanesoT3'
        },
        database: {
            format: String,
            default: 'rashids'
        },
        multipleStatements:{
            format: Boolean,
            default: true
        }
    }
});


module.exports = config;
