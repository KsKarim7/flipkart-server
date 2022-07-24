import mongoose from "mongoose";

export const Connection = async (USERNAME, PASSWORD) => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@ecommerce-web.dwxvd.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('DB Connected')
    }
    catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}
export default Connection;