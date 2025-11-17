import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import RootLayout from "./layouts/root-layout";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Movies from "./pages/Movies";
import MyCollections from "./pages/MyCollections";
import Shows from "./pages/Shows";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RootLayout />}>
					<Route index element={<Home />} />
					<Route path="/discover" element={<Discover />} />
					<Route path="/movies" element={<Movies />} />
					<Route path="/shows" element={<Shows />} />
					<Route path="/movie-details" element={<MovieDetails />} />
					<Route path="/my-collections" element={<MyCollections />} />
          {/* TODO add fallback route */}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
