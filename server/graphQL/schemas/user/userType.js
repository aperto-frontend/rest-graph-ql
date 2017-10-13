import {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLInt,
	GraphQLString,
	GraphQLList
} from 'graphql';
import { resolver } from 'graphql-sequelize';
import User from '../../../api/user/model';
import Recipe from '../../../api/recipe/model';
import recipeType from './recipeType';

User.Recipes = User.hasMany(Recipe, {
	as: 'recipes',
	foreignKey: 'user_id'
});

const userType = new GraphQLObjectType({
	name: 'User',
	description: 'A user',
	fields: {
		id: {
			type: new GraphQLNonNull(GraphQLInt)
		},
		username: {
			type: GraphQLString
		},
		first_name: {
			type: GraphQLString
		},
		recipes: {
			type: new GraphQLList(recipeType),
			resolve: resolver(User.Recipes)
		}
	}
});

export default userType;



