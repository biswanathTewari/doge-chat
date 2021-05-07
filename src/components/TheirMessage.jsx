const TheirMessage = ({ lastMessage, message }) => {
	//* checking if this the first message from the user
	const firstMessage =
		!lastMessage || lastMessage.sender.username !== message.sender.username;

	//~ structure of the component
	//? if it the first message from the sender -> display it's avatar
	//? check if we have attachments with the message , then
	//? render the attachment , i.e., the image
	//? else render the text message

	return (
		<div className="message-row">
			{firstMessage && (
				<div
					className="message-avatar"
					style={{
						backgroundImage:
							message.sender && `url(${message.sender.avatar})`,
					}}
				></div>
			)}
			{message.attachments && message.attachments.length > 0 ? (
				<img
					src={message.attachments[0].file}
					alt="message-attachment"
					className="message-image"
					style={{ marginLeft: firstMessage ? "4px" : "48px" }}
				/>
			) : (
				<div
					className="message"
					style={{
						float: "left",
						marginLeft: firstMessage ? "4px" : "48px",
						backgroundColor: "#CABCDC",
					}}
				>
					{message.text}
				</div>
			)}
		</div>
	);
};

export default TheirMessage;
