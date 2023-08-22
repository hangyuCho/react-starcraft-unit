import React from 'react';
import ProtossNexus from '../domain/protoss/buildings/ProtossNexus/ProtossNexus';
import ProtossProbe from '../domain/protoss/groundUnits/protossProbe/ProtossProbe';

const Playground = () => {
  return (
    <div className="text-amber-400 text-xs">
      <p className="text-indigo-300 text-4xl">Playground</p>
      <div className="border-gray-100 h-2/3 w-full">
        <ProtossProbe />
        <ProtossNexus />
      </div>
    </div>
  )
}

export default Playground
