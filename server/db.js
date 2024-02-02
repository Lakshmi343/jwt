import mongoose from "mongoose"
import  colors  from "colors"

const connectDB = async () => {
   try {
       const conn = await mongoose.connect(process.env.MONGO_URL, {
           useNewUrlParser: true,
           useUnifiedTopology: true,
       });
       console.log(`conneted to database ${conn.connection.host}`.bgRed.red);
   } catch (error) {
       console.error(error.message.bgRed.white); // Corrected line
   }
};

export default connectDB;