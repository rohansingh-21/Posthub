const mongoose = require('mongoose')

async function connectDB(){
   try{
    await mongoose.connect( process.env.Mongoose_string
    );
     console.log('connected to DB')
   }
   catch(err){
     console.log('Error in connection to DB' , err.message)
   }
}

module.exports = connectDB