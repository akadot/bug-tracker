export async function index(req, res) {
	res.status(200).send({ msg: 'Users GET INDEX' })
}

export async function store(req, res) {
	const { name, email, password, role } = req.body;

	res.status(201).send({ msg: 'Users POST STORE' })
}