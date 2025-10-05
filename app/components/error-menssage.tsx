import React from 'react';

interface ErrorMessageProps {
    errors?: string[];
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errors }) => {
    if (!errors || errors.length === 0) return null;

    return (
        <div className="text-red-500 text-xs" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {errors.map((error, index) => (
                <p key={index}>{error}</p>
            ))}
        </div>
    );
};

export default ErrorMessage;