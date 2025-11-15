import { Search } from "lucide-react";
import { NavLink } from "react-router";
import logo from "../assets/images/logo.png";

type NavLink = {
	label: string;
	path: string;
};

const navLinks: NavLink[] = [
	{ label: "Home", path: "/" },
	{ label: "Movies", path: "/movies" },
	{ label: "Shows", path: "/shows" },
	{ label: "My Collections", path: "/my-collections" },
];

export default function Navbar() {
	return (
		<nav className="flex items-center pr-6 py-4 border-accent shadow-lg font-poppins">
			<NavLink key={navLinks[0].path} to={navLinks[0].path}>
				<img src={logo} className="w-32" />
			</NavLink>
			<ul className="flex gap-10 pl-8">
				{navLinks.map(({ label, path }) => (
					<NavLink
						key={path}
						to={path}
						className={({ isActive }) =>
							isActive
								? "font-semibold text-lg text-blue-100 border-b-2 border-orange-500 transition-opacity"
								: "font-normal text-lg hover:text-blue-100 transition"
						}
					>
						{label}
					</NavLink>
				))}
			</ul>
			<div className="flex flex-col items-center gap-12 ml-auto">
				<div className="relative">
					<input
						type="text"
						id="movie"
						className="bg-gray-200 rounded-3xl h-10 text-black pl-14 pr-8"
						size={34}
						placeholder="Search here for movies or shows"
					/>
					<Search className="absolute top-2 left-5 text-black " />
				</div>
			</div>
		</nav>
	);
}
