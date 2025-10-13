import { Search } from "lucide-react";

export default function Home() {
	return (
		<>
			<div className="flex flex-col items-center py-16 gap-12">
				<div className="relative">
					<input
						type="text"
						id="movie"
						className="bg-gray-200 rounded-3xl h-16 text-black py-8 px-16"
						size={80}
            placeholder="Search here for a movie or series"
					/>
					<Search className="absolute top-5 left-5 text-black "/>
				</div>
			</div>
		</>
	);
}
