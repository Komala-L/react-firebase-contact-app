import { ImCross } from "react-icons/im";

const Modal = ({ onClose, isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 h-screen w-screen bg-black/50 backdrop-blur-sm"
      />

      <div className="fixed inset-0 z-50 m-auto flex max-h-[280px] w-[80%] max-w-[400px] flex-col rounded-lg bg-white p-4">
        <div className="flex justify-end">
          <ImCross
            onClick={onClose}
            className="cursor-pointer text-xl text-black hover:text-gray-800"
          />
        </div>

        <div className="mt-2 text-black">{children}</div>
      </div>
    </>
  );
};

export default Modal;
