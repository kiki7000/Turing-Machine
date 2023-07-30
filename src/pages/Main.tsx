import { useNavigate } from "react-router-dom";

import {
	StyledMainContainer,
	StyledMainBtn,
	StyledMainTitle,
} from "../components/styled.tsx";

const Main = () => {
	const navigate = useNavigate();

	return (
		<StyledMainContainer>
			<StyledMainTitle>튜링 머신</StyledMainTitle>
			<div>
				<StyledMainBtn onClick={() => navigate("/make")}>
					새로 만들기
				</StyledMainBtn>
			</div>
			<div>
				<StyledMainBtn onClick={() => navigate("/make")}>
					불러오기
				</StyledMainBtn>
			</div>
			<div>
				<StyledMainBtn onClick={() => navigate("/help")}>
					도움말
				</StyledMainBtn>
			</div>
			<div>
				<StyledMainBtn
					onClick={() =>
						window.location.replace(
							"https://github.com/woohyunjng/Turing-Machine"
						)
					}
				>
					깃허브
				</StyledMainBtn>
			</div>
		</StyledMainContainer>
	);
};

export default Main;
