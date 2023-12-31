import React, { useState } from 'react';

import CarouselItem from './CarouselItem';
import CarouselIndicator from './CarouselIndicator';

import { IoIosArrowBack } from 'react-icons/io';

export default function Carousel({ width, height, items, blog, handleSelectedBlog }: any) {
  console.log('blog:', blog)
  const [activeIndex, setActiveIndex] = useState<number>(0);

  function handleNextItemBtn() {
    setActiveIndex((prev) => {
      return prev + 1 < items.length ? prev + 1 : prev;
    });
  }

  function handlePrevItemBtn() {
    setActiveIndex((prev) => {
      return prev - 1 >= 0 ? prev - 1 : prev;
    });
  }

  function handleSelectedItem(blog: any) {
    handleSelectedBlog(blog)
  }

  return (
    <div className="carousel-container">
      {activeIndex > 0 && (
        <button
          className="carousel-btn-switch-card-left carousel-btn-switch-card"
          onClick={handlePrevItemBtn}
        >
          <IoIosArrowBack />
        </button>
      )}
      {items?.map((item: any, index: number) => (
        <CarouselItem handleSelectedItem={handleSelectedItem} key={index} index={index} blog={item.blog} activeIndex={activeIndex}>
          {item.img}
        </CarouselItem>
      ))}
      {activeIndex < items.length - 1 && (
        <button
          className="carousel-btn-switch-card-right carousel-btn-switch-card"
          onClick={handleNextItemBtn}
        >
          <IoIosArrowBack
            style={{
              transform: 'rotate(180deg)',
            }}
          />
        </button>
      )}

      <CarouselIndicator
        activeIndex={activeIndex}
        length={items.length}
        onSetActiveIndex={(activeIndex: any) => {
          setActiveIndex(activeIndex);
        }}
      />
    </div>
  );
}
