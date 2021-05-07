//& components
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
import MessageForm from "./MessageForm";

const ChatFeed = (props) => {
	//~ destructuring
	const { chats, activeChat, userName, messages } = props;

	const chat = chats && chats[activeChat];

	const renderMessages = () => {
		//& extracting the keys from the messages
		const keys = Object.keys(messages);

		return keys.map((key, index) => {
			const message = messages[key];
			const lastMessagekey = index === 0 ? null : keys[index - 1];
			const isMyMessage = userName === message.sender.username;

			return (
				<div key={`msg_${index}`} style={{ width: "100%" }}>
					<div className="message-block">
						{isMyMessage ? (
							<MyMessage message={message} />
						) : (
							<TheirMessage
								message={message}
								lastMessage={messages[lastMessagekey]}
							/>
						)}
					</div>
					<div
						className="read-receipts"
						style={{
							marginRight: isMyMessage ? "18px" : "0px",
							marginLeft: isMyMessage ? "0px" : "68px",
						}}
					>
						read-receipts
					</div>
				</div>
			);
		});
	};

	if (!chat) return <div className="">Loading...</div>;

	return (
		<div className="chat-feed">
			<div className="chat-title">
				<div className="chat-subtitle">
					{chat.people.map((person) => `${person.person.username}`)}
				</div>
			</div>
			{renderMessages()}
			<div style={{ height: "100px" }}></div>
			<div className="message-form-container">
				<MessageForm {...props} chatId={activeChat} />
			</div>
		</div>
	);
};

export default ChatFeed;
