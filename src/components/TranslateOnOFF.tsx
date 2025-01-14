// TranslateOnOFF.tsx
import { useState } from 'react';

interface TranslateProps {
  setIsAuto: React.Dispatch<React.SetStateAction<boolean>>; // Accept setIsAuto as a prop
}

export default function Translate({ setIsAuto }: TranslateProps) {
  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => {
    const newState = !isChecked;
    setIsChecked(newState); // Update the local state first
    setIsAuto(newState);     // Then update the parent state
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <label
        className="block w-[160px] h-[80px] rounded-full bg-gradient-to-b from-[#9e9e9e] to-[#f4f4f4] shadow-[0_2px_0_0_white,0_-2px_0_0_#969494] cursor-pointer transform scale-[1.5] z-[2]"
        onClick={handleToggle}
        tabIndex={0}
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle} // Handle state change here
          className="hidden"
        />
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120px] h-[50px] bg-gradient-to-b from-[#9e9e9e] to-[#f4f4f4] rounded-full z-[1]">
          <div
            className={`absolute inset-[2px] rounded-full bg-[#828080] shadow-inner transition-all duration-200 ${
              isChecked ? 'bg-[#f7931e] shadow-[inset_0_0_30px_0_rgba(0,0,0,0.6)]' : ''
            } z-[1]`}
          />
        </div>
        <i
          className={`absolute top-[10px] left-[15px] w-[60px] h-[60px] bg-gradient-to-t from-[#9e9e9e] to-[#f4f4f4] rounded-full shadow-[0_5px_10px_0_rgba(0,0,0,0.7)] transition-all duration-250 ${
            isChecked ? 'left-[86px]' : ''
          } z-[3]`}
        >
          <div
            className={`absolute w-[52px] h-[52px] top-[4px] left-[4px] rounded-full bg-[#d5d4d4] transition-all duration-250 z-[4]`}
          />
        </i>
        <span
          className={`absolute left-7 top-1/2 transform -translate-y-1/2 text-[1.2rem] font-semibold uppercase text-transparent transition-all duration-250 ${
            isChecked ? 'text-[#c6631d] text-shadow-[0_1px_0_rgba(255,255,255,0.3)]' : ''
          } z-[2]`}
        >
          On
        </span>
        <span
          className={`absolute right-7 top-1/2 transform -translate-y-1/2 text-[1.2rem] font-semibold uppercase text-[#444444] transition-all duration-250 ${
            isChecked ? 'text-transparent text-shadow-[0_1px_0_rgba(255,255,255,0)]' : 'text-shadow-[0_1px_0_rgba(255,255,255,0.2)]'
          } z-[2]`}
        >
          Off
        </span>
      </label>
    </div>
  );
}
