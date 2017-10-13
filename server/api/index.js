import { Router } from 'express';
import example from './example';
import user from './user';
import category from './category';
import recipe from './recipe';
import graphqlHTTP from 'express-graphql';
import userSchema from '../graphQL/schemas/userSchema';

const bodyParser = require('body-parser');
const router = new Router();

router.use(bodyParser.json());

router.use('/api/examples', example);

router.use('/api/users', user);

router.use('/api/categories', category);

router.use('/api/recipes', recipe);

router.use('/api/graphql/users', graphqlHTTP (req => {
	return {
		schema: userSchema,
		graphiql: true
	}
}));

/**
 * @apiDefine master Master access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine admin Admin access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine user User access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */

module.exports = router;
