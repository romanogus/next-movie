import { useEffect, useState } from "react";
import  fetchMovies from "../services/fetch-movies"

export function useMovies() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<unknown>(null);

	useEffect(() => {
		let alive = true;
		setLoading(true);
		fetchMovies(category)
			.then((res) => alive && setData(res))
			.catch((err) => alive && setError(err))
			.finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    }
	}, [category]);
}
