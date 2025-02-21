const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded shadow-md w-96">
          <button className="float-right text-gray-500" onClick={onClose}>×</button>
          <div>{children}</div>
        </div>
      </div>
    );
  };
  
  export default Modal;