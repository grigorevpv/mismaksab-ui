import React, { useState, useEffect, useRef, useCallback} from 'react'
import styles from './Slider.scss';

// slide button
import SliderButton from '../SliderButton/SliderButton';
// all slides
import SliderSlides from '../SliderSlides/SliderSlides';

const slidesData = [{
  imageURL:'https://www.selver.ee/img/800/800/resize/4/7/4740125000108.jpg',
  discount:'21',
  market:'selver',
  price:'4.29',
  oldPrice:'5.49',
  title:'Корм собачий ORLANDO GOURVE, 3 кг',
  pricePerKilo:'1.43',
  discountUntil:'15.04',
  isDisabled: false
},
{
  imageURL:'https://www.selver.ee/img/800/800/resize/4/7/4740125000108.jpg',
  discount:'21',
  market:'selver',
  price:'4.29',
  oldPrice:'5.49',
  title:'Корм собачий ORLANDO GOURVE, 3 кг',
  pricePerKilo:'1.43',
  discountUntil:'15.04',
  isDisabled: false
},{
  imageURL:'https://www.selver.ee/img/800/800/resize/4/7/4740125000108.jpg',
  discount:'21',
  market:'selver',
  price:'4.29',
  oldPrice:'5.49',
  title:'Корм собачий ORLANDO GOURVE, 3 кг',
  pricePerKilo:'1.43',
  discountUntil:'15.04',
  isDisabled: false
},
{
  imageURL:'https://www.selver.ee/img/800/800/resize/4/7/4740125000108.jpg',
  discount:'21',
  market:'selver',
  price:'4.29',
  oldPrice:'5.49',
  title:'Корм собачий ORLANDO GOURVE, 3 кг',
  pricePerKilo:'1.43',
  discountUntil:'15.04',
  isDisabled: false
},
{
  imageURL:'https://www.selver.ee/img/800/800/resize/4/7/4740125000108.jpg',
  discount:'21',
  market:'selver',
  price:'4.29',
  oldPrice:'5.49',
  title:'Корм собачий ORLANDO GOURVE, 3 кг',
  pricePerKilo:'1.43',
  discountUntil:'15.04',
  isDisabled: false
},
{
  imageURL:'https://www.selver.ee/img/800/800/resize/4/7/4740125000108.jpg',
  discount:'21',
  market:'selver',
  price:'4.29',
  oldPrice:'5.49',
  title:'Корм собачий ORLANDO GOURVE, 3 кг',
  pricePerKilo:'1.43',
  discountUntil:'15.04',
  isDisabled: false
},
{
  imageURL:'https://www.selver.ee/img/800/800/resize/4/7/4740125000108.jpg',
  discount:'21',
  market:'selver',
  price:'4.29',
  oldPrice:'5.49',
  title:'Корм собачий ORLANDO GOURVE, 3 кг',
  pricePerKilo:'1.43',
  discountUntil:'15.04',
  isDisabled: false
},
{
  imageURL:'https://www.selver.ee/img/800/800/resize/4/7/4740125000108.jpg',
  discount:'21',
  market:'selver',
  price:'4.29',
  oldPrice:'5.49',
  title:'Корм собачий ORLANDO GOURVE, 3 кг',
  pricePerKilo:'1.43',
  discountUntil:'15.04',
  isDisabled: false
},
{
  imageURL:'https://www.selver.ee/img/800/800/resize/4/7/4740125000108.jpg',
  discount:'21',
  market:'selver',
  price:'4.29',
  oldPrice:'5.49',
  title:'Корм собачий ORLANDO GOURVE, 3 кг',
  pricePerKilo:'1.43',
  discountUntil:'15.04',
  isDisabled: false
},
{
  imageURL:'https://www.selver.ee/img/800/800/resize/4/7/4740125000108.jpg',
  discount:'21',
  market:'selver',
  price:'4.29',
  oldPrice:'5.49',
  title:'Корм собачий ORLANDO GOURVE, 3 кг',
  pricePerKilo:'1.43',
  discountUntil:'15.04',
  isDisabled: false
},
{
  imageURL:'https://www.selver.ee/img/800/800/resize/4/7/4740125000108.jpg',
  discount:'21',
  market:'selver',
  price:'4.29',
  oldPrice:'5.49',
  title:'Корм собачий ORLANDO GOURVE, 3 кг',
  pricePerKilo:'1.43',
  discountUntil:'15.04',
  isDisabled: false
}]

export default function Slider() {
  const [slides, setSlides] = useState(slidesData);
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

  // вот это функция для ajax запроса и отображения слайдов
  // custom fetch hook
  // const [isDataLoading, dataError] = useLoader(async() => {
  //   const ajaxResult = await GoodsService.get(GET_GOODS_LIMIT);
  //   flushSync(async () => {
  //     setSlides(ajaxResult.data);
  //   })

  //   setWidths()
  //   window.addEventListener('resize', setWidths);

  //   return () => {
  //     window.removeEventListener('resize', setWidths);
  //   }
  // }, [])
  useEffect(() => {
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

  const handleNextSlideCb = useCallback(() => {
    let newOffset = offset - offsetWidth.sliderBox;
    const maxOffset = -Math.abs(offsetWidth.allSlides - offsetWidth.sliderBox); //max possible offset to right elem
    // scroll to ending
    if (newOffset < maxOffset) newOffset = maxOffset; //number are negative, so <

    setOffset(newOffset);
  },[offset, offsetWidth]);

  const handlePrevSlideCb = useCallback(() => {
    let newOffset = offset + offsetWidth.sliderBox;
    // scroll to beginning
    if (newOffset > 0) newOffset = 0;

    setOffset(newOffset);
  },[offset, offsetWidth.sliderBox]);

  return (
    <div className={styles.slider}>
      <SliderButton isShown={isPrevBtnShown} onClick={handlePrevSlideCb} type='prev'/>

      <div ref={sliderBox} className={styles.sliderBox}>
        <SliderSlides slides={slides} offset={offset}/>
      </div>

      <SliderButton isShown={isNextBtnShown} onClick={handleNextSlideCb} type='next'/>
    </div>
  )
}