import React from 'react';
import styles from './SliderSlides.scss';
import GoodCard from '../GoodCard/GoodCard';

interface Props {
  slides: string[],
  offset: number
};

export default function SliderSlides({slides, offset}: Props) {
  
  return (
    <div
        className={styles.sliderSlides}
        style={{transform: `translateX(${offset}px)`}}
      >
        {slides.map((slide, i) =>
          <GoodCard key={i} //когда появятся реальные данные исправить i на id
            i={i} //delete it after
            imageURL='https://www.selver.ee/img/800/800/resize/4/7/4740125000108.jpg'
            discount='21'
            market='selver'
            price='4.29'
            oldPrice='5.49'
            title='Корм собачий ORLANDO GOURVE, 3 кг'
            pricePerKilo='1.43'
            discountUntil='15.04'
            isDisabled={false}
          />
        )}
    </div>
  )
}