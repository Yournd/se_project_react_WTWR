import './ModalWithForm.css';
import closeBtn from '../../assets/close.svg';

function ModalWithForm({ isOpen, children, buttonText, title, handleClose, name }) {
  return (
  <div className={`modal modal_type_${name} ${isOpen ? 'modal_opened' : ''}`} >
    <div className="modal__content">
      <h2 className="modal__title">{title}</h2>
      <button onClick={handleClose} type="button" className="modal__close">
        <img src={closeBtn} alt="Modal Close Button" />
      </button>
    <form name={name} className="modal__form">
    {children}
    <button type='submit' className="modal__submit">{buttonText}</button>
    </form>
    </div>
  </div>
  )
}

export default ModalWithForm;