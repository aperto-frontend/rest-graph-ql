import {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLInt,
	GraphQLList,
	GraphQLString
} from 'graphql/type';
import userType from '../types/userType';
import User from '../../api/user/model';
import { resolver } from 'graphql-sequelize';

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQueryType',
		fields: {
			user: {
				type: userType,
				args: {
					id: {
						description: 'id of the user',
						type: new GraphQLNonNull(GraphQLInt)
					}
				},
				resolve: resolver(User)
			},
			userSearch: {
				type: new GraphQLList(userType),
				args: {
					query: {
						description: 'Matched name of user',
						type: new GraphQLNonNull(GraphQLString)
					}
				},
				resolve: resolver(User, {
					before: (findOptions, args) => {
						findOptions.where = {
							name: {"$like": `%${args.query}%`}

						}
					},
					after: (results, args) => {
						return results.sort((a, b) => {
							if (a.name === args.query) {
								return 1;
							}
							else if (b.name === args.query) {
								return -1;
							}

							return 0;
						});
					}
				})
			}
		}
	})
});

export default schema;
