import React from 'react'

import Water from './water';
function Container({ level }) {
  return (
    <div className="w-24 h-48 border-4 border-black mx-auto relative overflow-hidden bg-white shadow-lg flex flex-col-reverse">
      {[...Array(level)].map((_, i) => (
        <Water key={i} />
      ))}
    </div>
  );
}


export default Container