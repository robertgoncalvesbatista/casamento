import {
  forwardRef,
  PropsWithChildren,
  useImperativeHandle,
  useState,
} from "react";

export type ModalRef = {
  open: () => void;
  close: () => void;
};

const Modal = forwardRef<ModalRef, PropsWithChildren>(({ children }, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setOpen(true),
    close: () => setOpen(false),
  }));

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        {children}
      </div>
    </div>
  );
});

export default Modal;
