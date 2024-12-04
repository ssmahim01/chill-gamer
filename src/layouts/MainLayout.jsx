import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MainLayout = () => {
    const {loading} = useContext(AuthContext);
    
    if(loading){
        <div className="flex justify-center items-center pt-36">
            <p className="text-3xl text-center font-bold">loading...</p>
        </div>
        return;
    };

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