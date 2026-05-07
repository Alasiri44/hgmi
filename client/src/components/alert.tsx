import { useEffect, useState } from "react";

type AlertProps = {
  message: string;
  error?: boolean;
  onClose?: () => void;
};

export default function Alert({ message, error = false, onClose }: AlertProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div
      className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-xl shadow-lg text-sm font-semibold transition-all animate-fade-in
      ${
        error
          ? "bg-red-100 text-red-700 border border-red-300"
          : "bg-green-100 text-green-700 border border-green-300"
      }`}
    >
      {message}
    </div>
  );
}