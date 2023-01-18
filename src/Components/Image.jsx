import React from 'react'

export default Image = (props) => {
  return (
    <div className='w-max'>
    <img src={props.link} className={props.className} alt={props.children} key={"image_"+props.children} />
    </div>
  )
}
