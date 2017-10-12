import Sequelize from 'sequelize';

const sequelize = new Sequelize('mealplanner', 'aperto', '12345', {
	host: 'localhost',
	dialect: 'sqlite',

	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},

	storage: '../../mealplanner.sqlite'
});

// sequelize.sync()
// 	.then(_ => {
// 		console.log('syncing');
// 	});

export default sequelize;
