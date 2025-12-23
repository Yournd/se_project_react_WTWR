import "./ProfileMobileModal.css";
import basicClose from "../../assets/basic-close.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

export default function ProfileMobileModal({ isOpen, handleClose, onAddClick }) {
  return (
    <div className={`modal modal_type_mobile modal_type_${name} ${isOpen ? "modal_opened" : ""}`}>
      <div className="mobile-profile">
        <img
          onClick={handleClose}
          src={basicClose}
          alt="Close Button"
          className="mobile-profile__close-btn"
        />
        <div className="mobile-profile__profile">
          <div className="mobile-profile__user-wrapper">
            <p className="mobile-profile__username">Terrence Tegegne</p>
            <img src={avatar} alt="Avatar Photo" className="mobile-profile__avatar" />
          </div>
          <button type="button" onClick={onAddClick} className="mobile-profile__add-clothes-btn">
            + Add Clothes
          </button>
          <ToggleSwitch />
        </div>
      </div>
    </div>
  );
}
