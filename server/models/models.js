const sequilize = require('../db');
const {DataTypes, Sequelize} = require('sequelize');

const User = sequilize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    roles: {type: DataTypes.STRING, defaultValue: 'USER'},
    firstName: {type: DataTypes.STRING, defaultValue: ''},
    lastName: {type: DataTypes.STRING, defaultValue: ''}
})

const Vote = sequilize.define('vote', {
    userId: {type: DataTypes.INTEGER},
    postId: {type: DataTypes.INTEGER},
    result: {type: DataTypes.ARRAY(DataTypes.INTEGER)}
})

const News = sequilize.define('news', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
    subtitle: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING},
})


User.hasMany(Vote);
Vote.belongsTo(User);

module.exports = {
    User, Vote, News
}
