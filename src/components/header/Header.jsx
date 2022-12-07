import AppBar from "../../components/header/AppBar/AppBar";
import Navigation from "../../components/header/nav/Navigation";

const Header = () => {
  return (
    <header>
      <nav>
        <AppBar />
        <Navigation />
      </nav>
    </header>
  );
};

export default Header;
