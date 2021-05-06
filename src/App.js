import "./App.css";
import { ChatEngine } from "react-chat-engine";
//& components
import ChatFeed from "./components/ChatFeed";

const App = () => {
	return (
		<ChatEngine
			height="100vh"
			projectID="d718f294-dc80-41f4-b578-368053082bc6"
			userName="bizan"
			userSecret="dogechat"
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
};

export default App;
