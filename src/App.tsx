import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ConfigProvider } from "antd";

import Main from "./pages/Main.tsx";
import Make from "./pages/Make.tsx";
import Help from "./pages/Help.tsx";

const App = () => {
	return (
		<div className="App">
			<ConfigProvider
				theme={{
					token: {
						fontFamily: "'Do Hyeon', sans-serif;",
					},
				}}
			>
				<BrowserRouter basename="/Turing-Machine">
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/make" element={<Make />} />
						<Route path="/help" element={<Help />} />
					</Routes>
				</BrowserRouter>
			</ConfigProvider>
		</div>
	);
};

export default App;
