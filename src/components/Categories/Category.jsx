import React from 'react'

const Category = ({fill, className}) => {
    return (
        <div className={`category ${className}`}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill={fill ? fill : "#BDBDBD"} d="M5 0.15625C2.32422 0.15625 0.15625 2.32422 0.15625 5C0.15625 7.67578 2.32422 9.84375 5 9.84375C7.67578 9.84375 9.84375 7.67578 9.84375 5C9.84375 2.32422 7.67578 0.15625 5 0.15625Z"  />
            </svg>
        </div>
    )
}

export default Category
