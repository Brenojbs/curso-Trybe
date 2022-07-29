const createLikeAdmin = require('./createLikeAdmin');
const deleteLikeAdmin = require('./deleteLikeAdmin');

module.exports = {
  createAnyUser: (user, agentRole) => createLikeAdmin(user, agentRole),
  deleteUser: (userId, agentRole) => deleteLikeAdmin(userId, agentRole),
};