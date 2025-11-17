
export default function MovieList({ type }: { type: string }) {
	// const [movieList, setMovieList] = useState([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);


	return (
		<>
			<h3 className="text-2xl font-semibold tracking-tight scroll-m-20">
				{type}
			</h3>
			{/* {movieList.map((movie) => (
				<h1>{movie}</h1>
			))} */}
		</>
	);
}
