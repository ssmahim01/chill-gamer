import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Loading from "../components/Loading";

const MainLayout = () => {
    const {loading} = useContext(AuthContext);
    
    if(loading){
        return <Loading></Loading>
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