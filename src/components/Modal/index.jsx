import PropTypes from 'prop-types';
import { MdClose } from '@react-icons/all-files/md/MdClose';

function Modal({ id, title, content }) {
  return (
    <>
      <dialog id={id} className="modal">
        <div className="overflow-hidden modal-box">
          <div className="flex flex-col gap-4">
            <div className="items-center justify-between w-full">
              <h3 className="text-lg font-bold">{title}</h3>
              <button
                className="absolute btn btn-sm btn-circle btn-ghost right-4 top-6"
                onClick={() => {
                  const modal = document.getElementById(id);
                  modal.close();
                }}
              >
                <MdClose size={20} />
              </button>
            </div>
            <div>{content}</div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.node,
};

export default Modal;
