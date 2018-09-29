var profiles = require('./profile.json')

function findAll() {
  return profiles
}

function findById(id) {
  return profiles[id]
}

function create(obj) {
  profiles.push(obj)
  return profiles
}

function update(id, obj) {
  var current = profiles[id]
  for (var key in obj) {
    if (obj[key]) {
      current[key] = obj[key]
    }
  }
  return profiles[id]
}

function remove(id) {
  profiles.splice(id, 1);
  return profiles
}

module.exports = {
  findAll: findAll,
  findById: findById,
  create: create,
  update: update,
  remove: remove
}
