import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import MyCollections from "./pages/MyCollections";
import RootLayout from "./layouts/RootLayout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RootLayout />}>
					<Route index element={<Home />} />
					<Route path="/discover" element={<Discover />} />
					<Route path="/movie-details" element={<MovieDetails />} />
					<Route path="/my-collections" element={<MyCollections />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
