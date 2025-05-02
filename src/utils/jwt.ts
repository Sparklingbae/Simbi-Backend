import jwt from "jsonwebtoken";
import Config from "../config/settings";

function genereteJWTToken(id: string, type: "access" | "refresh") {
	const payload = {
		sub: id,
	};
	const exp =
		type === "access"
			? { expiresIn: Config.JWT_EXPIRATION_MINUTES * 60 * 1000 }
			: { expiresIn: Config.JWT_EXPIRATION_HOURS * 60 * 60 * 1000 };
	const token = jwt.sign(payload, Config.ACCESS_JWT_SECRET, exp);
	return token;
}

export { genereteJWTToken };