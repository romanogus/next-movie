import { Outlet } from "react-router";
import Navbar from "../components/navbar";

export default function RootLayout() {
	return (
		<div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-700 to-gray-900 text-white">
			<Navbar />
      <main className="container mx-auto font-inter py-16">
        <Outlet/>
      </main>
		</div>
	);
}
