import { useMediaQuery } from "react-responsive";
import "./Header.css";
import avatar from "../../assets/avatar.png";
import logo from "../../assets/wtwr-logo.svg";
import profileBtn from "../../assets/profile-btn.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ weatherData, handleAddClick }) {
  const currentDate = new Date().toLocaleString("default", { month: "long", day: "numeric" });

  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <header className="header">
      <div className="header__logo-wrapper">
        <img className="header__logo" src={logo} alt="WTWR Logo" />
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      {isDesktop ? (
        <div className="header__desktop-profile">
          <ToggleSwitch />
          <button type="button" onClick={handleAddClick} className="header__add-clothes-btn">
            + Add Clothes
          </button>
          <div className="header__user-wrapper">
            <p className="header__username">Terrence Tegegne</p>
            <img src={avatar} alt="Avatar Photo" className="header__avatar" />
          </div>
        </div>
      ) : (
        <button className="header__mobile-profile-btn">
          <img src={profileBtn} alt="Profile Button" className="header__profile-btn" />
        </button>
      )}
    </header>
  );
}

export default Header;
