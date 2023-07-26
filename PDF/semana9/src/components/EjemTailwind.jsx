import React from "react";

function EjemTailwind() {
  return (
    <div>
      <h1 className="text-slate-500 text-5xl">uso de hooks</h1>
      <div className="container mx-auto flex gap-5">
        <div className="bg-red-800 w-1/5">jaime</div>
        <div className="bg-green-800 w-2/5">juan</div>
        <div className="bg-blue-800 w-2/5">ana</div>
      </div>
      <div className="container mx-auto flex">
        <div className="bg-red-800 w-1/4">jaime</div>
        <div className="bg-green-800 w-3/4">juan</div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-y-10">
          <div className="bg-red-600">rojos</div>
          <div className="bg-green-600">verde</div>
          <div className="bg-blue-950">azul</div>
          <div className="bg-red-600">rojos</div>
          <div className="bg-green-600">verde</div>
        </div>
      </div>
    </div>
  );
}

export default EjemTailwind;

