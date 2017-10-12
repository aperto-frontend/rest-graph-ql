import {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLInt,
	GraphQLString
} from 'graphql';

const recipeType = new GraphQLObjectType({
	name: 'Recipe',
	description: 'A recipe',
	fields: {
		user_id: {
			type: new GraphQLNonNull(GraphQLInt)
		},
		name: {
			type: GraphQLString
		},
		description: {
			type: GraphQLString
		},
		// user: {
		// 	type: new GraphQLObjectType
		// }
	}
});

export default recipeType;
