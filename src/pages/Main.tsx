import { useNavigate } from "react-router-dom";

import { Typography, Button } from "antd";

const Main = () => {
	const navigate = useNavigate();

	return (
		<div
			style={{
				textAlign: "center",
				display: "block",
			}}
		>
			<Typography.Title
				style={{
					marginTop: "25vh",
				}}
			>
				튜링 머신
			</Typography.Title>
			<div>
				<Button
					style={{
						marginTop: "0.5px",
						width: "200px",
					}}
					onClick={() => navigate("/make")}
				>
					새로 만들기
				</Button>
			</div>
			<div>
				<Button
					style={{
						marginTop: "0.5px",
						width: "200px",
					}}
					onClick={() => navigate("/make")}
				>
					불러오기
				</Button>
			</div>
			<div>
				<Button
					style={{
						marginTop: "0.5px",
						width: "200px",
					}}
					onClick={() => navigate("/help")}
				>
					도움말
				</Button>
			</div>
			<div>
				<Button
					style={{
						marginTop: "0.5px",
						width: "200px",
					}}
					onClick={() =>
						window.location.replace(
							"https://github.com/woohyunjng/Turing-Machine"
						)
					}
				>
					깃허브
				</Button>
			</div>
		</div>
	);
};

export default Main;
