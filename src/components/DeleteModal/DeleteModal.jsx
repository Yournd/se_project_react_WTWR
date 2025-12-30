import close from "../../assets/close.svg";
import "./DeleteModal.css";

export default function DeleteModal({ card, isOpen, handleClose, handleDelete }) {
  const handleDeleteClick = () => {
    handleDelete(card._id);
  };

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_delete">
        <img onClick={handleClose} src={close} alt="Close Button" className="modal__close" />
        <div className="modal__delete">
          <p className="modal__delete-title">
            Are you sure you want to delete this item? <br />
            This action is irreversible.
          </p>
          <button onClick={handleDeleteClick} className="modal__delete-confirm">
            Yes, delete item
          </button>
          <button onClick={handleClose} className="modal__delete-cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
