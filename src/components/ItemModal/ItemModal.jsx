import "./ItemModal.css";
import closeBtn from "../../assets/white-close.svg";

function ItemModal({ isOpen, card, handleClose, handleDeleteClick }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button onClick={handleClose} type="button" className="modal__close modal__close_type_preview">
          <img src={closeBtn} alt="Modal Close Button" />
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__footer-wrapper">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <button onClick={handleDeleteClick} className="modal__delete-btn">
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
