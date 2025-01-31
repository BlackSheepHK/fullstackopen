const ColorMessage = ({ message, color }) => {
	const style = {
		color: color,
		background: "lightgrey",
		fontSize: 20,
		borderStyle: "solid",
		borderRadius: 5,
		padding: 10,
		marginBottom: 10,
	};

	if (message === null) {
		return <div></div>;
	} else {
		return <div style={style}>{message}</div>;
	}
};

export default ColorMessage;
