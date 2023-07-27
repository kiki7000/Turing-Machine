import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main.tsx";

class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter basename="/Turing-Machine">
					<Routes>
						<Route path="/" element={<Main />} />
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
