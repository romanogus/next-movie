import { NavLink } from "react-router";

type NavLink = {
	label: string;
	path: string;
};

const navLinks: NavLink[] = [{ label: "Home", path: "/" }, {label: 'Discover', path: '/discover'}, {label: 'My Collections', path: '/my-collections'}];

export default function Navbar() {
	return (
		<nav className="p-6">
			<ul className="flex gap-10">
				<h1 className="px-8">*logo here*</h1>

				{navLinks.map(({ label, path }) => (
					<NavLink
						key={path}
						to={path}
						className="font-semibold hover:text-amber-100"
					>
						{label}
					</NavLink>
				))}
			</ul>
		</nav>
	);
}
