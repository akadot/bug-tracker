import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const CheckJWT = (req, res, next) => {
	const token = req.headers['authorization'];

	jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
		if (err) {
			res.status(401).send({ error: 'Usuário não autorizado.' })
			res.end();
			return
		} else {
			req.userId = decoded.userId;
			req.userRole = decoded.role;
			next();
		}
	})
}

export default CheckJWT;