import { useNavigate } from "react-router-dom";

import { MainContainer, MainBtn, MainTitle } from "../components/styled.tsx";

const Main = () => {
	const navigate = useNavigate();

	return (
		<MainContainer>
			<MainTitle>튜링 머신</MainTitle>
			<div>
				<MainBtn onClick={() => navigate("/make")}>새로 만들기</MainBtn>
			</div>
			<div>
				<MainBtn onClick={() => navigate("/make")}>불러오기</MainBtn>
			</div>
			<div>
				<MainBtn onClick={() => navigate("/help")}>도움말</MainBtn>
			</div>
			<div>
				<MainBtn
					onClick={() =>
						window.location.replace(
							"https://github.com/woohyunjng/Turing-Machine"
						)
					}
				>
					깃허브
				</MainBtn>
			</div>
		</MainContainer>
	);
};

export default Main;
