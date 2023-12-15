import React from 'react'

const Button = ({ onClick, children, className }) => {
    return (
        <button
            className={`${className ? className : ''} bg-gray-600 hover:bg-gray-500 text-white font-bold border-b-4 border-gray-800 hover:border-gray-600 rounded-lg`}
            onClick={onClick}>{children}</button>
    )
}

export default Button