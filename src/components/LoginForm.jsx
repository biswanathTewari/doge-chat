import axios from "axios";
import React, { useState } from "react";

const LoginForm = () => {
	const [username, setUsername] = useState("doge");
	const [password, setPassword] = useState("dogechat");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const authObject = {
			"Project-ID": "d718f294-dc80-41f4-b578-368053082bc6",
			"User-Name": username,
			"User-Secret": password,
		};

		//* checking and storing the credentials
		try {
			//~ checking
			await axios.get("https://api.chatengine.io/chats", {
				headers: authObject,
			});

			//~ storing
			localStorage.setItem("username", username);
			localStorage.setItem("password", password);

			setError("");
			window.location.reload();
		} catch (err) {
			setError("Oops , wrong username or password !");
		}
	};

	return (
		<div className="wrapper">
			<div className="form">
				<h1 className="title">Doge Chat</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className="input"
						placeholder="Username"
						required
					/>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="input"
						placeholder="Password"
						required
					/>
					<div align="center">
						<button type="submit" className="button">
							<span>lets's doge chat</span>
						</button>
					</div>
				</form>
				<h1>{error}</h1>
			</div>
		</div>
	);
};

export default LoginForm;
