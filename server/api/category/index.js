import { Router } from 'express';
import Category from './model';

const router = new Router();

router.get('/', (req, res) => {
	Category.findAll().then((users) => { //todo: use controller
		res.send(users);
	});
});

export default router;
