import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {

	res.status(200).send({ msg: 'Tickets GET' })
});

router.post('/', (req, res) => {

	res.status(201).send({ msg: 'Tickets POST' })
});

export default router;