export async function index(req, res) {
	res.status(200).send({ msg: 'Tickets GET INDEX' })
}

export async function store(req, res) {
	// const {name, } = req.body;
	res.status(201).send({ msg: 'Tickets POST STORE' })
}