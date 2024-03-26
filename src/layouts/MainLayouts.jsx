import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <div>
      <div className="h-16  max-w-7xl mx-auto ">
        <Nav />
      </div>
      <div className="min-h-[calc(100vh-116px)]">
        <Outlet/>
      </div>
  
      <Footer/>
    </div>
  );
};

export default MainLayouts;
