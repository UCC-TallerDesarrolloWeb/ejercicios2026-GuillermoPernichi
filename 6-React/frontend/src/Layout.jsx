import Header from "./Header";
import Footer from "./Foooter";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout;