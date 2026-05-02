import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components";
import AllRoutes from "./routes/AllRoutes"

const App = () => {
	return (
		<>
			{/* <Header /> */}
			<AllRoutes />
			{/* <Footer /> */}
		</>
	);
};

export default App;
