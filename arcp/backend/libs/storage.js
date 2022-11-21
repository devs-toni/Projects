'use strict';

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './storage/imgs')
    },
    filename: function (req, file, cb) {
        const array = file.originalname.split('.');
        cb(null, `${array[0]}.png`);
    }
});

const upload = multer({ storage });

module.exports = upload;