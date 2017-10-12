import Sequelize from 'sequelize';
import sequelize from '../../configs/sequelize';

const User = sequelize.define('user', {
	username: {
		type: Sequelize.STRING,
		unique: true,
		notNull: true
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	first_name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		validate: {
			isEmail: true
		}
	},
	password: Sequelize.STRING(8), // todo: encrypt and validate etc
	avatar_url: {
		type: Sequelize.STRING,
		validate: {
			isUrl: true
		}
	},
	description: {
		type: Sequelize.TEXT,
		allowNull: false
	}
});

User.sync({force: true})
	.then(() => User.create({
	  username: 'toastbroad',
	  name: 'Broad',
	  first_name: 'Oliver Daniel',
	  email: 'odbroad@gmail.com',
	  password: '12345678',
	  avatar_url: 'https://www.mealplanner.com/avatar/toastbroad',
	  description: 'Totally laid back and passionate about cooking'
	}));

export default User;
