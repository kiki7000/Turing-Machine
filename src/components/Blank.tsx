import { useState } from "react";

import { StyledBlank } from "./styled";

interface BlankProps {
	focus: boolean;
	value: string;
	set: (val: number | string | null) => void;
}

const Blank = ({ focus, value, set }: BlankProps) => {
	return (
		<StyledBlank
			min={1}
			max={9}
			controls={false}
			value={value}
			onChange={set}
			status={focus ? "warning" : undefined}
		/>
	);
};

export default Blank;
