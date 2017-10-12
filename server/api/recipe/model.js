import Sequelize from 'sequelize';
import sequelize from '../../configs/sequelize';

import User from '../user/model';
import Category from '../category/model';

const Recipe = sequelize.define('recipe', {
	user_id: {
		type: Sequelize.INTEGER,
		notNull: true,
		references: {
			model: User,
			key: 'id'
		}
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	description: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	ingredients: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	category: {
		type: Sequelize.INTEGER,
		allowNull: false,
		references: {
			model: Category,
			key: 'id'
		}
	},
	image_url: {
		type: Sequelize.STRING,
		validate: {
			isUrl: true
		}
	}
});

const recipes = [
	{
		user_id: 1,
		name: 'Fabulous tofu dish1',
		description: 'This tofu dish is simply to die for',
		ingredients: 'Tofu, tofu and more tofu',
		category: 1,
		image_url: 'https://www.mealplanner.com/recipe/1'
	},
	{
		user_id: 1,
		name: 'Fabulous tofu dish2',
		description: 'This tofu dish is simply to die for',
		ingredients: 'Tofu, tofu and more tofu',
		category: 1,
		image_url: 'https://www.mealplanner.com/recipe/2'
	},
	{
		user_id: 1,
		name: 'Fabulous tofu dish3',
		description: 'This tofu dish is simply to die for',
		ingredients: 'Tofu, tofu and more tofu',
		category: 1,
		image_url: 'https://www.mealplanner.com/recipe/3'
	},
	{
		user_id: 1,
		name: 'Fabulous tofu dish4',
		description: 'This tofu dish is simply to die for',
		ingredients: 'Tofu, tofu and more tofu',
		category: 1,
		image_url: 'https://www.mealplanner.com/recipe/4'
	},
	{
		user_id: 1,
		name: 'Fabulous tofu dish5',
		description: 'This tofu dish is simply to die for',
		ingredients: 'Tofu, tofu and more tofu',
		category: 1,
		image_url: 'https://www.mealplanner.com/recipe/5'
	}
];

Recipe.sync({force: true})
	.then(() => {
		setTimeout(() => {
			recipes.forEach(recipe => Recipe.create(recipe));
		}, 500); // todo: remove this ugly hack to make sure this gets deleted and created last
	});

export default Recipe;
