import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components";
import AllRoutes from "./routes/AllRoutes"

const App = () => {
	return (
		<>
			<AllRoutes />
		</>
	);
};

export default App;
