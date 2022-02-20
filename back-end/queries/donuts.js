
const db = require("../db/dbConfig.js");

const getAllDonuts = async() => {
    try{
        const allDonuts = await db.any('SELECT * FROM donuts;');
        return allDonuts;
      }  catch(error) {
            return error;
        }
    }
    
    const getDonut = async(id)=>{
        try{
            const oneDonut = await db.one(
                "SELECT * FROM donuts WHERE id=$1;",
                id
            );
            return oneDonut;
        } catch(error){
            return error;
        }
    }

const createDonut = async (donut) => {
    try{
        const newDonut = await db.one(
            "INSERT INTO donuts (name, description, jolt, price, rating, featured, quantity, image, responsibility) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;",
            [donut.name, donut.description, donut.jolt, donut.price, donut.rating, donut.featured,  donut.quantity,  donut.image, donut.responsibility]           
        
        )
        return newDonut;
    } catch(error) {
        return error;
    }
    }

const deleteDonut = async (id) => {
    try {
        const deletedDonut = await db.one(
            "DELETE FROM donuts WHERE id = $1 RETURNING *;",
            id
        );
        return deletedDonut;
    } catch (error) {
        return error;
    }
}

const updateDonut = async (id, donut) => {
    try {
        const updatedDonut = await db.one(
            "UPDATE donuts SET name=$1, description=$2, jolt=$3, price=$4, rating=$5, featured=$6, quantity=$7, image=$8, responsibility=$9 WHERE id=$10 RETURNING *;",

           [donut.name, donut.description, donut.jolt, donut.price, donut.rating, donut.featured, donut.quantity, donut.image, donut.responsibility, id]
          
            );
            console.log(updatedDonut);
        return updatedDonut;
    } catch (error) {
        return error;
    }
}

module.exports = {
getAllDonuts,
getDonut,
createDonut,
deleteDonut,
updateDonut,
};
