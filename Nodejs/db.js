const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/curdDB',(err)=>{
    if(!err)
    {
        console.log('connection successful :-) ')

    }
    else
    {
        console.log('not connected : '+JSON.stringify( err,undefined,2))
    }
});

module.export = mongoose;