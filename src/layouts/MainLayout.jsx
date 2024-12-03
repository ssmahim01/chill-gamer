import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
           <header>
           <Navbar></Navbar>
           </header>

            <main className="min-h-[calc(100vh-335px)]">
            <Outlet></Outlet>
            </main>

            <footer>
            <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;