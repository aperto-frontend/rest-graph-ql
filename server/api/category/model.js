import Sequelize from 'sequelize';
import sequelize from '../../configs/sequelize';

const Category = sequelize.define('category', {
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	description: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	image_url: {
		type: Sequelize.STRING,
		validate: {
			isUrl: true
		}
	}
});

Category.sync({force: true})
	.then(() => Category.create({
	  title: 'Vegetarian',
	  description: 'Awesome vegetarian recipes',
	  image_url: 'https://www.mealplanner.com/category/vegetarian'
	}));

export default Category;
