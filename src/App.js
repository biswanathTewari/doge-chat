import "./App.css";
import { ChatEngine } from "react-chat-engine";
//& components
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

const App = () => {
	if (!localStorage.getItem("username")) return <LoginForm />;
	return (
		<ChatEngine
			height="100vh"
			projectID="d718f294-dc80-41f4-b578-368053082bc6"
			userName={localStorage.getItem("username")}
			userSecret={localStorage.getItem("password")}
		/>
	);
};

export default App;
