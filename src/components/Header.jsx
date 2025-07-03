import React, { useState } from 'react'


import Water from './water';
import Container from './Container';
function Header() 
{

    const [container, setContainers] = useState([]);
    const [addwater, setAddwater] = useState(false);
    
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
        <button className='bg-red-600' onClick={handleRemove}>Remove Container</button>
    <button className='bg-blue-300' onClick={() => setAddwater(true)}>Fill Water</button>
    <div>
      
    {container.map(id => (
  <Container key={id}  addwater={addwater}
  
  />
))}
    </div>
    </>
  )
}

export default Header