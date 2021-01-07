const db = require('../data/db-config');

module.exports = {
  
    add,
    update
}





async function add(newCar) {
  try {
    const [id] = await db("car").insert(newCar, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}


async function update(id, changes) {
    try {
        await db('car').where({ id }).update(changes);
        return await findById(id);
    } catch (err) {
        throw err;
    }
}

