import React from 'react'

 const Button = ({type,children,className,submit}) => {
  return (
    <button type={type} className={className + "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"} onSubmit={submit}>{children}</button>
  )
}
export default Button;
