import './ItemModal.css';
import closeBtn from '../../assets/close.svg';

function ItemModal({ activeModal, card, handleClose }) {
  return (
    <div className={`modal ${activeModal === "preview" && 'modal_opened'}`}>
      <div className="modal__content modal__content_type_image">
        <button onClick={handleClose} type="button" className="modal__close">
                <img src={closeBtn} alt="Modal Close Button" />
              </button>
              <img src={card.link} alt={card.name} className="modal__image" />
              <div className="modal__footer">
                <h2 className="modal__caption">{card.name}</h2>
                <p className="modal__weather">Weather: {card.weather}</p>
              </div>
      </div>
    </div>
  )
}

export default ItemModal;