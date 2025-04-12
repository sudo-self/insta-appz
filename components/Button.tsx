import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  isLoading: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, isLoading }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-green-700 text-white px-4 py-2 rounded hover:bg-indigo-600 ${
        isLoading ? 'bg-gray-500 cursor-not-allowed' : ''
      }`}
      disabled={isLoading} 
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export { Button };





