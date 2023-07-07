import React, { useCallback, useState } from 'react'
import styles from './GoodCard.scss';
import classnames from 'classnames';
import selverPng from './../../assets/icons/selver.png'; // как отображать другие
import addedToListSvg from './../../assets/icons/card_added.svg';

export default function GoodCard({
    i,
    imageURL,
    discount,
    market,
    price,
    oldPrice,
    title,
    pricePerKilo,
    discountUntil,
    isDisabled = false,
}) {
  const [addedToList, setAddedToList] = useState(false);
  const addToListCallBack = useCallback(() => {
    setAddedToList(!addedToList);
  }, [addedToList]);

  return (
    <div className={styles.goodCardWrapper}>
        <div className={classnames(
            styles.goodCard,{
                [styles.disabled]: isDisabled
            }
        )}>
            <div className={classnames(styles.goodCardAdd, {
                [styles.added]: addedToList
            })} onClick={addToListCallBack}>
                {
                    addedToList
                    ? <img src={addedToListSvg}/>
                    : <span>+</span>
                }
            </div>

            <div className={styles.goodCardImage}>
                <img src={imageURL}/>

                <div className={classnames(styles.goodCardInfo, styles.info)}>
                    <div className={styles.infoDiscount}>{discount} %</div>
                    <img src={selverPng} className={styles.infoMarket}/>
                </div>
            </div>

            <div className={styles.goodCardTextWrapper}>
                <div className={classnames(styles.goodCardPrices, styles.prices)}>
                    <span className={styles.pricesCurrent}>{price}</span>
                    <span className={styles.pricesOld}>{oldPrice}</span>
                </div>

                <a href='/' className={styles.goodCardTitle}>{title}</a>

                <h4 className={styles.goodCardPricePerKilo}>{pricePerKilo}€/kg</h4>

                <h4 className={styles.goodCardDiscountUntil}>{i}, Скидка до {discountUntil}</h4>
            </div>
        </div>
    </div>
  )
}
