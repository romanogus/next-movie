import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function RootLayout() {
	return (
		<div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-600 text-white font-poppins">
			<Navbar />
      <main className="container mx-auto">
        <Outlet/>
      </main>
		</div>
	);
}
