import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Routes from "../../routes/Routers";

function Layout() {
  return (
    <div>
      <Header />
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
