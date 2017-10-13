import {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLInt
} from 'graphql/type';
import userType from '../types/userType';
import User from '../../api/user/model';
import { resolver } from 'graphql-sequelize';

const userSchema = new GraphQLSchema({
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
			}
		}
	})
});

export default userSchema;
