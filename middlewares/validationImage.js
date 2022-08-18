const multer = require('multer');
const path= require('path');


const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, path.join(__dirname, '../public/images/users'));
    },

    filename:(req,file,cb)=>{
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
   
let upload= multer({storage:storage});

module.exports= upload;