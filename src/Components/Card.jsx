import React from 'react';
import Form from  './Form';
import Image from './Image';

 const Card = (props) => {
      return(
        
          <div className={props.className + ' bg-neutral-50 mx-4 px-2 py-4 shadow rounded-xl'} >
            
            {
              (props.type === "image") ? props.inside.map( data => <Image link={data.src} className="w-auto h-12" key={"imageCard_"+data.alt}>data.alt</Image> ): 
              <Form  type={props.type} payload={props.payload} /> 
            }
          </div>  
        

      )
}
export default Card;
