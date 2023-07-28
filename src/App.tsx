import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ConfigProvider } from "antd";

import Main from "./pages/Main.tsx";

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
					</Routes>
				</BrowserRouter>
			</ConfigProvider>
		</div>
	);
};

export default App;
