import { useState, useEffect } from "react";

import Blank from "../components/Blank";
import { StyledBlankContainer, StyledSlider } from "../components/styled";

const getMax = (width: number) => {
	if (width >= 2560) return 40;
	else if (width >= 1920) return 30;
	else if (width >= 1280) return 20;
	else if (width >= 1000) return 16;
	else if (width >= 640) return 8;
	else if (width >= 480) return 6;
	else if (width >= 320) return 5;
	else return 4;
};

const Make = () => {
	const [max, setMax] = useState(getMax(window.innerWidth));

	const [header, setHeader] = useState(1);
	const [blankArray, setBlankArray] = useState(
		Array.from({ length: 101 }, () => "")
	);

	useEffect(() => {
		const resizeListener = () => {
			setMax(getMax(window.innerWidth));
		};
		window.addEventListener("resize", resizeListener);
	});

	return (
		<div>
			<StyledBlankContainer>
				{(header <= Math.round(max / 2)
					? Array.from(Array(max).keys()).map((v) => v + 1)
					: header >= 100 - Math.round(max / 2)
					? Array.from(Array(max).keys()).map((v) => v + 101 - max)
					: Array.from(Array(max).keys()).map(
							(v) => v + header - Math.round(max / 2) + 1
					  )
				).map((b) => (
					<Blank
						focus={b === header}
						key={b}
						value={blankArray[b]}
						set={(value: number | string | null) => {
							let ims_arr = [...blankArray];
							if (typeof value === "number")
								value = value.toString();
							else if (!value) value = "";
							ims_arr[b] = value;
							setBlankArray(ims_arr);
						}}
					/>
				))}
			</StyledBlankContainer>

			<StyledSlider
				defaultValue={1}
				min={1}
				max={100}
				value={header}
				onChange={(value: number) => {
					setHeader(value);
				}}
			/>
		</div>
	);
};

export default Make;
