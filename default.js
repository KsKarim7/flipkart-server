import { products } from "./constants/data.js"
import Product from "./model/product-schema.js"

const defaultData = async () => {
    try {
        await Product.insertMany(products)

        console.log('Data inserted successfully');
    }
    catch (error) {
        console.log('Error inserting default Data', error.message)
    }
}

export default defaultData;