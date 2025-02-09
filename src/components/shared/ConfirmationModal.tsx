import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type ConfirmationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const ConfirmationModal = ({ isOpen, onClose, onConfirm }: ConfirmationModalProps) => {
  const [confirmationText, setConfirmationText] = useState("");

  const handleConfirm = () => {
    if (confirmationText === "delete my account") {
      onConfirm();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-dark-1/20 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-dark-2/70 w-full max-w-md rounded-xl shadow-2xl border border-dark-4/60 overflow-hidden">
        <div className="flex items-center justify-between border-b border-dark-4/60 p-4 bg-dark-2/70 backdrop-blur-sm">
          <h3 className="text-light-1 font-bold">Confirm Account Deletion</h3>
          <button onClick={onClose} className="hover:bg-dark-4/50 p-1 rounded-full transition-colors">
            <img src="/assets/icons/close.svg" alt="close" className="w-5 h-5 invert-white" />
          </button>
        </div>
        
        <div className="p-6">
          <p className="mb-4 text-light-1">Please type "delete my account" to confirm.</p>
          <Input
            type="text"
            value={confirmationText}
            onChange={(e) => setConfirmationText(e.target.value)}
            className="mb-4 shad-input"
          />
          <div className="flex justify-end gap-2">
            <Button onClick={onClose} className="shad-button_dark_4">Cancel</Button>
            <Button onClick={handleConfirm} className="shad-button_destructive" disabled={confirmationText !== "delete my account"}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
