import './ModalWithForm.css';
import closeBtn from '../../assets/close.svg';

function ModalWithForm({ children, buttonText, title, activeModal, handleClose }) {
  return (
  <div className={`modal ${activeModal === 'add-garment' && 'modal_opened'}`} >
    <div className="modal__content">
      <h2 className="modal__title">{title}</h2>
      <button onClick={handleClose} type="button" className="modal__close">
        <img src={closeBtn} alt="Modal Close Button" />
      </button>
    <form className="modal__form">
    {children}
    <button type='submit' className="modal__submit">{buttonText}</button>
    </form>
    </div>
  </div>
  )
}

export default ModalWithForm;