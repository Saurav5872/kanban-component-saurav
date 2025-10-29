import React from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

export const Modal: React.FC<Props> = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white rounded-xl p-4 w-full max-w-2xl shadow-modal">
        {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
        <div>{children}</div>
        <div className="mt-4 flex justify-end">
          <button onClick={onClose} className="px-3 py-2 rounded bg-neutral-100">Close</button>
        </div>
      </div>
    </div>
  );
};
