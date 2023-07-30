import styled from "styled-components";
import { Button, Typography, InputNumber, Slider } from "antd";

export const StyledMainContainer = styled.div`
	text-align: center;
	display: block;
`;

export const StyledMainTitle = styled(Typography.Title)`
	margin-top: 25vh;

	@media only screen and (min-width: 2560px) {
		font-size: 150px !important;
	}

	@media only screen and (min-width: 1920px) and (max-width: 2559px) {
		font-size: 100px !important;
	}

	@media only screen and (min-width: 1000px) and (max-width: 1919px) {
		font-size: 60px !important;
	}

	@media only screen and (min-width: 640px) and (max-width: 999px) {
		font-size: 40px !important;
	}

	@media only screen and (max-width: 639px) {
		font-size: 30px !important;
	}
`;

export const StyledMainBtn = styled(Button)`
	@media only screen and (min-width: 2560px) {
		width: 1000px;
		margin-top: 30px;
		height: 70px;
		font-size: 40px;
	}

	@media only screen and (min-width: 1920px) and (max-width: 2559px) {
		width: 800px;
		margin-top: 20px;
		height: 50px;
		font-size: 30px;
	}

	@media only screen and (min-width: 1000px) and (max-width: 1919px) {
		width: 500px;
		margin-top: 5px;
		height: 40px;
		font-size: 20px;
	}

	@media only screen and (min-width: 640px) and (max-width: 999px) {
		width: 400px;
		margin-top: 5px;
		height: 30px;
		font-size: 15px;
	}

	@media only screen and (min-width: 320px) and (max-width: 639px) {
		width: 200px;
		margin-top: 5px;
		height: 30px;
		font-size: 15px;
	}

	@media only screen and (max-width: 319px) {
		width: 150px;
		margin-top: 5px;
		height: 30px;
		font-size: 15px;
	}
`;

export const StyledBlankContainer = styled.div`
	height: 50px;
	border: 1px solid black;
	margin-left: auto;
	margin-right: auto;
	margin-top: 10vh;

	@media only screen and (min-width: 2560px) {
		width: 2000px;
	}

	@media only screen and (min-width: 1920px) and (max-width: 2559px) {
		width: 1500px;
	}

	@media only screen and (min-width: 1280px) and (max-width: 1919px) {
		width: 1000px;
	}

	@media only screen and (min-width: 1000px) and (max-width: 1279px) {
		width: 800px;
	}

	@media only screen and (min-width: 640px) and (max-width: 999px) {
		width: 400px;
	}

	@media only screen and (min-width: 480px) and (max-width: 639px) {
		width: 300px;
	}

	@media only screen and (min-width: 320px) and (max-width: 479px) {
		width: 250px;
	}

	@media only screen and (max-width: 319px) {
		width: 200px;
	}
`;

export const StyledBlank = styled(InputNumber)`
	width: 50px;
	height: 50px;
	font-size: 25px;
	text-align: center;
	border-radius: 0px;
`;

export const StyledSlider = styled(Slider)`
	margin-left: auto;
	margin-right: auto;

	@media only screen and (min-width: 2560px) {
		width: 2000px;
	}

	@media only screen and (min-width: 1920px) and (max-width: 2559px) {
		width: 1500px;
	}

	@media only screen and (min-width: 1280px) and (max-width: 1919px) {
		width: 1000px;
	}

	@media only screen and (min-width: 1000px) and (max-width: 1279px) {
		width: 800px;
	}

	@media only screen and (min-width: 640px) and (max-width: 999px) {
		width: 400px;
	}

	@media only screen and (min-width: 480px) and (max-width: 639px) {
		width: 300px;
	}

	@media only screen and (min-width: 320px) and (max-width: 479px) {
		width: 250px;
	}

	@media only screen and (max-width: 319px) {
		width: 200px;
	}
`;
