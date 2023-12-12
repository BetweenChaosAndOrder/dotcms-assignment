import React, { useState } from 'react';

export interface CardProps {
  index: number;
  activeIndex: number;
  children?: React.ReactNode;
  blog: any;
}

export default function CarouselItem({ index, activeIndex, children, blog }: CardProps) {
  const hostName: string = 'https://' + blog.contentHost.hostName
  console.log('blog:', blog)

  const offset = (index - activeIndex) / 4;
  const direction = Math.sign(index - activeIndex);
  const absOffset = Math.abs(offset);

  const cssTransformProperties = `
        rotateY(calc(${offset} * 55deg))
        scaleY(calc(1 +  ${absOffset}  * -0.5))
        translateX(calc( ${direction} * -3.5rem))
        translateZ(calc( ${absOffset} * -35rem))

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
      }}
    >
      {children}

      <div
        className="relative z-10 opacity-50 rounded-[15px] bg-white text-xs text-bg px-3 py-1.5 font-medium text-gray-50 hover:bg-gray-200"
        style={{
          position: "absolute",
          top: "7%",
          right: "-3%",
          transform: "translate(-50%, -50%)"
        }}
      >
          {blog.tags[0]}
      </div>

      <div
        className="w-full relative z-10 text-small leading-6 bg-gray-300 p-2 opacity-80 text-bg font-medium hover:bg-gray-200"
        style={{
          position: "absolute",
          top: "95%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
          {blog.title}
      </div>

      <div className="relative mt-8 flex items-center gap-x-4 p-2"
        style={{
          position: "absolute",
          top: "3%",
          left: "12%",
          transform: "translate(-50%, -50%)"
        }}>
        <img src={hostName + blog.author[0].titleImage.idPath} alt="" className="z-10 h-10 w-10 rounded-full bg-gray-100" />
        <div className="text-xs leading-6 bg-white rounded-[8px] -ml-10 pl-7 pr-1 py-1 opacity-50 hover:bg-gray-200">
          <p className="font-medium text-bg">
            <a href=''>
              <span className="absolute inset-0 opacity-100" />
              {blog.author[0].firstName} {blog.author[0].lastName}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
