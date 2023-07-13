import React, { useEffect, useState } from "react";

const VRView = () => {
  const { panX, panY, autoPan, handleMouseMove, handleAutoPan, setAutoPan } =
    useVr();

  return (
    <div
      className="vr-container w-full h-screen overflow-hidden relative"
      onMouseLeave={handleAutoPan}
      onMouseEnter={() => setAutoPan(false)}
      onMouseMove={handleMouseMove}
    >
      <div
        className={`vr-image ${autoPan ? "auto-pan" : null}`}
        style={{
          transform: `translate(${panX}%, ${panY}%)`
        }}
      >
        <div className="p-3 top-0 bottom-0 right-0 left-0 w-[100%] absolute text-center text-lg">
        <div className="p-3 top-0 bottom-0 right-0 left-0 w-[55%] absolute bg-glass text-center text-lg">
          WELL HELLOOO
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <button>A BIG BUTTON</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default VRView;

// ?? ====  CONTROLLER ==== ?? //
export function useVr() {
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [autoPan, setAutoPan] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setAutoPan(false);
    const clientX = e.clientX;
    const clientY = e.clientY;
    const percentageX = (clientX / document.body.clientWidth) * 10;
    const percentageY = (clientY / document.body.clientHeight) * 10;
    setPanX(-percentageX);
    setPanY(-percentageY);
  };

  const handleAutoPan = () => {
    setTimeout(() => {
      setAutoPan(true);
    }, 10000);
  };

  return { panX, panY, autoPan, handleMouseMove, handleAutoPan, setAutoPan };
}
