import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeContact, deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
import Modal from "react-modal";
import { toast } from "react-hot-toast";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);

  const openDeleteModal = () => {
    setDeleteModalIsOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalIsOpen(false);
  };

  const openEditModal = () => {
    setEditModalIsOpen(true);
  };

  const closeEditModal = () => {
    setEditModalIsOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .then(() => {
        toast.success(`Contact ${name} has been deleted successfully.`);
        closeDeleteModal();
      })
      .catch((error) => {
        toast.error(`Failed to delete contact: ${error.message}`);
      });
  };

  const handleEdit = () => {
    dispatch(changeContact({ contactId: id, name: newName, number: newNumber }))
      .then(() => {
        toast.success(`Contact ${name} has been updated successfully.`);
        closeEditModal();
      })
      .catch((error) => {
        toast.error(`Failed to update contact: ${error.message}`);
      });
  };

  return (
    <div className={css.contact}>
      <div className={css.contact_info}>
        <p className={css.text}>{name}</p>
        <p className={css.text}>{number}</p>
      </div>
      <div className={css.button_container}>
        <button className={css.btn} onClick={openDeleteModal}>
          Delete
        </button>
        <button className={css.btn} onClick={openEditModal}>
          Change
        </button>
      </div>

      {/* Delete Modal */}
      <Modal
        isOpen={deleteModalIsOpen}
        onRequestClose={closeDeleteModal}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <div className={css.modalContent}>
          <p>Are you sure you want to delete {name}?</p>
          <div>
            <button className={css.modalBtn} onClick={handleDelete}>
              Confirm
            </button>
            <button className={css.modalBtn} onClick={closeDeleteModal}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>

      {/* Edit Modal */}
      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={closeEditModal}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <div className={css.modalContent}>
          <h2>Edit Contact</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEdit();
            }}
          >
            <label>
              Name:
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </label>
            <label>
              Number:
              <input
                type="text"
                value={newNumber}
                onChange={(e) => setNewNumber(e.target.value)}
              />
            </label>
            <div>
              <button className={css.modalBtn} type="submit">
                Save
              </button>
              <button
                className={css.modalBtn}
                type="button"
                onClick={closeEditModal}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;
