import React, { useState } from "react";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";
import { sendMessage, isTyping } from "react-chat-engine";

const MessageForm = (props) => {
	//& destructuring
	const { creds, chatId } = props;

	//& states
	const [value, setValue] = useState("");

	const onSubmitHandler = (e) => {
		e.preventDefault();

		const text = value.trim();

		if (text === "" || text === " ")
			return alert("Please type something to send a message");

		if (text.length > 0);
		sendMessage(creds, chatId, { text: text });

		setValue("");
	};

	//TODO isTyping
	const onChangeHandler = (e) => {
		setValue(e.target.value);
		isTyping(creds, chatId);
	};

	const onUploadHandler = (e) => {
		sendMessage(creds, chatId, { files: e.target.files, text: "" });
	};

	return (
		<form className="message-form" onSubmit={onSubmitHandler}>
			<input
				className="message-input"
				placeholder="enter your message..."
				value={value}
				onChange={onChangeHandler}
				onSubmit={onSubmitHandler}
			/>

			<label htmlFor="upload-button">
				<span className="image-button">
					<PictureOutlined className="picture-icon" />
				</span>
			</label>

			<input
				type="file"
				id="upload-button"
				multiple={false}
				style={{ display: "none" }}
				onChange={onUploadHandler}
			/>

			<button type="submit" className="send-button">
				<SendOutlined className="send-icon" />
			</button>
		</form>
	);
};

export default MessageForm;
