import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
import Modal from "react-modal";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteContact(id));
    closeModal();
  };

  return (
    <div className={css.contact}>
      <div className={css.contact_info}>
        <p className={css.text}>{name}</p>
        <p className={css.text}>{number}</p>
      </div>
      <button className={css.btn} onClick={openModal}>
        Delete
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <div className={css.modalContent}>
          <p>Are you sure you want to delete {name}?</p>
          <div>
            <button className={css.modalBtn} onClick={handleDelete}>
              Confirm
            </button>
            <button className={css.modalBtn} onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;
