import "./Header.css";
import avatar from "../../assets/avatar.png";
import logo from "../../assets/wtwr-logo.svg";

function Header({ handleAddClick }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="WTWR Logo" />
      <p className="header__date-and-location">June 15, New York</p>
      <button type="button" onClick={handleAddClick} className="header__add-clothes-btn">+ Add Clothes</button>
      <div className="header__user-wrapper">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Avatar Photo" className="header__avatar" />
      </div>
    </header>
  )
}

export default Header;