import React, { useState, useEffect, useRef, useCallback} from 'react'
import styles from './scss/Slider.module.css';
import classnames from 'classnames';
import { flushSync } from 'react-dom';

// arrow svg
import arrowSvg from './../../assets/icons/slider_arrow.svg';

// fetch hook
import useLoader from '../../hooks/useLoader';
import GoodsService from '../../API/GoodsService';

import { GoodCard } from '../GoodCard/GoodCard';


const GET_GOODS_LIMIT = 10;

export function Slider() {
  const [slides, setSlides] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isPrevBtnShown, setIsPrevBtnShown] = useState(false);
  const [isNextBtnShown, setIsNextBtnShown] = useState(false);
  const [offsetWidth, setOffsetWidth] = useState({
    sliderBox: 0,
    allSlides: 0
  });
  
  const sliderBox = useRef(null); //slides wrapper

  // set widths function
  function setWidths() {
    setOffsetWidth({
      sliderBox: sliderBox.current.offsetWidth,
      allSlides: sliderBox.current.children[0].offsetWidth
    });
  }

  // custom fetch hook
  const [isDataLoading, dataError] = useLoader(async() => {
    const ajaxResult = await GoodsService.get(GET_GOODS_LIMIT);
    flushSync(async () => {
      setSlides(ajaxResult.data);
    })

    setWidths()
    window.addEventListener('resize', setWidths);

    return () => {
      window.removeEventListener('resize', setWidths);
    }
  }, [])

  // change visibility of slider buttons
  useEffect(() => {
    offset >= 0 ? setIsPrevBtnShown(false): setIsPrevBtnShown(true); //show or disable prev slide button
    offsetWidth.allSlides + offset - offsetWidth.sliderBox > 0 ? setIsNextBtnShown(true): setIsNextBtnShown(false); //show or disable next slide button
  }, [offsetWidth, offset]);

  const handleNextSlide = useCallback(() => {
    let newOffset = offset - offsetWidth.sliderBox;
    const maxOffset = -Math.abs(offsetWidth.allSlides - offsetWidth.sliderBox); //max possible offset to right elem
    // scroll to ending
    if (newOffset < maxOffset) newOffset = maxOffset; //number are negative, so <

    setOffset(newOffset);
  },[offset, offsetWidth]);

  const handlePrevSlide = useCallback(() => {
    let newOffset = offset + offsetWidth.sliderBox;
    // scroll to beginning
    if (newOffset > 0) newOffset = 0;

    setOffset(newOffset);
  },[offset, offsetWidth.sliderBox]);

  return (
    <div className={styles.slider}>
      <PrevSlideButton isShown={isPrevBtnShown} onClick={handlePrevSlide}/>
      <div ref={sliderBox} className={styles.sliderBox}>
        <div
          className={styles.sliderSlides}
          style={{transform: `translateX(${offset}px)`}}
        >
          {slides.map(slide =>
            <GoodCard key={slide.id}
              i={slide.id} //delete it after
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
      </div>
      <NextSlideButton isShown={isNextBtnShown} onClick={handleNextSlide}/>
    </div>
  )
}

function PrevSlideButton({isShown, onClick}) {
  return (
    <div className={classnames(
      styles.sliderButton,
      styles.prev, {
        [styles.shown]: isShown
      })} 
    onClick={onClick}
    >
      <img className={styles.sliderButtonArrow} src={arrowSvg} alt="" />
    </div>
  )
}

function NextSlideButton({isShown, onClick}) {
  return (
    <div className={classnames(
      styles.sliderButton,
      styles.next, {
        [styles.shown]: isShown
      })}
    onClick={onClick}
    >
      <img className={styles.sliderButtonArrow} src={arrowSvg} alt="" />
    </div>
  )
}
