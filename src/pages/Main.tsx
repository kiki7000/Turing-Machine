import { Component } from "react";

import { Typography, Button } from "antd";

class Main extends Component {
	render() {
		return (
			<div
				style={{
					textAlign: "center",
					display: "block",
				}}
			>
				<Typography.Title
					style={{
						marginTop: "30vh",
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
					>
						도움말
					</Button>
				</div>
			</div>
		);
	}
}

export default Main;
