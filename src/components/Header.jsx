import React, { useState } from 'react'


import Water from './water';
import Container from './Container';
function Header() 
{

    const [container, setContainers] = useState([]);
    
    const handleContainer=()=>{       
     
 setContainers(prev => [...prev, prev.length]);
    };
    

    const handleRemove=()=>
      {
        console.log("Deleted")
      };

  return (
    <>
    <button className='bg-blue-400'onClick={handleContainer}>Add Container</button>
        <button onClick={handleRemove}>Remove Container</button>
    <button>Fill Water</button>
    <div>
      
    {container.map(id => (
  <Container key={id} />
))}
    </div>
    </>
  )
}

export default Header