import React from 'react';
import styles from './SliderButton.scss';
import classnames from 'classnames';

// arrow svg
import arrowSvg from './../../assets/icons/slider_arrow.svg';

interface Props {
  isShown: boolean,
  onClick: () => void,
  type: 'next' | 'prev'
};

export default function SliderButton({isShown, onClick, type}: Props) {
  return (
    <div className={classnames(
      styles.sliderButton,
      styles[type], {
        [styles.shown]: isShown
      })}
    onClick={onClick}
    >
      <img className={styles.sliderButtonArrow} src={arrowSvg} alt="" />
    </div>
  )
}