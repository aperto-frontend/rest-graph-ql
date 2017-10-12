import { Router } from 'express';
import Recipe from './model';

const router = new Router();

router.get('/', (req, res) => {
	Recipe.findAll().then((users) => { //todo: use controller
		res.send(users);
	});
});

export default router;
