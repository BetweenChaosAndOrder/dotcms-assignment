import React, { useState } from 'react';

export interface CardProps {
  index: number;
  activeIndex: number;
  children?: React.ReactNode;
}

export default function CarouselItem({ index, activeIndex, children }: CardProps) {
  const [scaled, setScaled] = useState<Boolean>(false);

  const offset = (index - activeIndex) / 4;
  const direction = Math.sign(index - activeIndex);
  const absOffset = Math.abs(offset);

  const cssTransformProperties = `
        rotateY(calc(${offset} * 55deg))
        scaleY(calc(1 +  ${absOffset}  * -0.5))
        translateX(calc( ${direction} * -3.5rem))
        translateZ(calc( ${absOffset} * -35rem))
        scale(${scaled && index === activeIndex ? 6.5 : 1})
       `;

  const cssOpacity = `
        ${Math.abs(index - activeIndex) >= 3 ? '0' : '1'}`;

  const cssDisplay = `
        ${Math.abs(index - activeIndex) >= 3 ? 'none' : 'block'},
  `;

  return (
    <div
      className="carousel-item"
      style={{
        transform: cssTransformProperties,
        opacity: cssOpacity,
        display: cssDisplay,
        zIndex: `${scaled ? 100 : 1}`,
      }}
      onClick={() => {
        setScaled(!scaled);
      }}
    >
      {children}

      <div
        className="relative z-10 opacity-70 rounded-[15px] bg-bg text-xs text-white px-3 py-1.5 font-medium text-gray-50 hover:bg-gray-800"
        style={{
          position: "absolute",
          top: "7%",
          right: "-11%",
          transform: "translate(-50%, -50%)"
        }}
      >
          Thu Sep 19 21:59:00 UTC 2019
      </div>

      <div
        className="relative z-10 opacity-70 rounded-[15px] bg-bg text-white px-3 py-1.5 font-medium text-gray-50 hover:bg-gray-800"
        style={{
          position: "absolute",
          top: "90%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
          Easy Snowboard Tricks You can Start Using Right Away
      </div>

      <div className="relative mt-8 flex items-center gap-x-4 p-2"
        style={{
          position: "absolute",
          top: "3%",
          left: "12%",
          transform: "translate(-50%, -50%)"
        }}>
        <img src="https://demo.dotcms.com/dA/f851e34ad1/profilePhoto/john-smith.jpg?language_id=1" alt="" className="z-10 h-10 w-10 rounded-full bg-gray-100" />
        <div className="text-xs leading-6 bg-white rounded-[8px] -ml-10 pl-6 pr-1 py-1 opacity-50">
          <p className="font-medium text-bg">
            <a href=''>
              <span className="absolute inset-0 opacity-100" />
              John Smith
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
