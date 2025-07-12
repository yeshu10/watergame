import React, { useState } from 'react';
import Container from './Container';

function Header() {
  const [containers, setContainers] = useState([]);
  const MAX_WATER_LEVEL = 7;

  const handleContainer = () => {
    setContainers(prev => [...prev, { id: prev.length, level: 0 }]);
  };

  const handleRemove = () => {
    setContainers(prev => prev.slice(0, -1));
  };

  const handleFillWater = () => {
    setContainers(prev =>
      prev.map(container =>
        container.level < MAX_WATER_LEVEL
          ? { ...container, level: container.level + 1 }
          : container
      )
    );
  };

  const handleDrainWater = () => {
  setContainers(prev =>
    prev.map(container =>
      container.level > 0
        ? { ...container, level: container.level - 1 }
        : container
    )
  );
};


  return (
    <>
      <div className="flex gap-4 mb-4">
        <button className="bg-blue-400 px-4 py-2 text-white rounded" onClick={handleContainer}>
          Add Container
        </button>
        <button className="bg-red-600 px-4 py-2 text-white rounded" onClick={handleRemove}>
          Remove Container
        </button>
        <button className="bg-blue-300 px-4 py-2 text-white rounded" onClick={handleFillWater}>
          Fill Water
        </button>
         <button className="bg-blue-300 px-4 py-2 text-white rounded" onClick={handleDrainWater}>
          Drain Water
        </button>
      </div>

      <div className="flex gap-6 flex-wrap justify-center">
        {containers.map(container => (
          <Container key={container.id} level={container.level} />
        ))}
      </div>
    </>
  );
}

export default Header;
