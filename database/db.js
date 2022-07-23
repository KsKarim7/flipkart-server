import mongoose from "mongoose";

export const Connection = async () => {
    const URL = `mongodb+srv://flip:Hx9ZWV32z3PVeVxv@ecommerce-web.dwxvd.mongodb.net/?retryWrites=true&w=majority`;
    // const URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ecommerce-web.dwxvd.mongodb.net/?retryWrites=true&w=majority`;
    // console.log(process.env.DB_PASSWORD)

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('DB Connected')
    }
    catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}
export default Connection;