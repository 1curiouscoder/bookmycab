import React from 'react'

const Link = ({href,children,className}) => {
  return (
    <a href={href} className={className}>{children}</a>
  )
}
export default Link;
