import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import * as db from '../database/connection.js';

dotenv.config();

export async function signIn(req, res) {
	//verifica usuario
	const { email, password } = req.body;

	if (!email || !password) {
		res.status(400).send({ error: 'ERRO: Preencha todos os campos necessários.' });
		res.end();
		return;
	}

	const matchUser = await db.default('users').where({ email: email });

	if (matchUser.length <= 0) {
		res.status(404).send({ error: `ERRO: Usuário de email ${email} não existe no sistema.` });
		res.end();
		return;
	}

	const user = matchUser[0];
	const passMatch = await bcrypt.compare(password, user.password);

	if (!passMatch) {
		res.status(403).send({ error: `ERRO: Login incorreto.` });
		res.end();
		return;
	}

	//criar token ({auth: true, userId: user.id, role: user.role})
	const token = jwt.sign({ userId: user.id, role: user.role }, process.env.TOKEN_SECRET, { expiresIn: 1800 });

	res.status(200).send({ auth: true, token, userId: user.id, role: user.role, name: user.name });
	res.end();
}

export async function signOut(req, res) {
	//expira/deleta token
}