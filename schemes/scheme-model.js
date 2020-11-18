// scheme-model
const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}
function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes').where({id}).first()
}

function findSteps(id) {
    return db('schemes').select('steps').where({id})
}

function add(data) {
    return db('schemes')
      .insert(data, 'id')
      
}

function update(id, changes) {
    return db('actions')
      .where('id', id)
      .update(changes)
      .then((count) => (count > 0 ? get(id) : null));
}

function remove(id) {
    return db('scheme').where('id', id).del()
}