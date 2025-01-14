// DotNavigation.tsx
import React from 'react'

interface DotNavigationProps {
    current: number;
    setCurrent: React.Dispatch<React.SetStateAction<number>>;
    slides: { id: number; title: string; img: string; url: string; description: string; bg: string }[];
}

const DotNavigation: React.FC<DotNavigationProps> = ({ current, setCurrent, slides }) => {
    return (
        <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
            {slides.map((slide, index) => (
                <div
                    className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? 'scale-150' : ''}`}
                    key={slide.id}
                    onClick={() => setCurrent(index)}
                >
                    {current === index && <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>}
                </div>
            ))}
        </div>
    );
}

export default DotNavigation;
