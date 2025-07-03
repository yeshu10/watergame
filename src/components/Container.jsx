import React from 'react'

import Water from './water';
function Container({addwater}) {
  return (
   
         <div className="w-24 h-48 border-4 border-black mx-auto relative overflow-hidden bg-white shadow-lg">
           {addwater && <Water />}
      <div className="absolute bottom-0 w-full " />
    </div>
   
  )
}

export default Container