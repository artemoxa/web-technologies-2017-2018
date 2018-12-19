const Sequelize = require('sequelize');

const connection = new Sequelize('sample_db', 'root', 'password', {
    dialect: 'mysql'
});

const Film = connection.define('film', {
	title: {
			type: Sequelize.STRING,
			allowNull: false
	},
	id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true
	},
	popularity: {
		type: Sequelize.DOUBLE,
		allowNull: false
	}
});

connection.sync()
    .then(function(){
			console.log('* connection successed');
    })
    .catch(function(error){
        console.log(error);
    });

module.exports = Film;