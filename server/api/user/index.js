import { Router } from 'express';
import User from './model';

const router = new Router();

router.get('/', (req, res) => {
	User.findAll().then((users) => { //todo: use controller
		res.send(users);
	});
});

export default router;
