import styles from './FAQ.module.css'
import classnames from 'classnames'
import React from 'react';

export default function FAQ() {
    // const [state] = React.useState();
    
    return (
        <div>
           <h2 className={ classnames("wrap light", styles.mainMar) }>Вопросы-ответы</h2>
            <div className={ classnames('wrap light', styles.mar) }>
                <div className={ styles.innerWrap}>
                    <h3 className={ styles.question }>Что такое Билетопоиск?</h3>
                    <button className={ styles.toggle }></button>
                </div>
                <p className={ styles.answer }>Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.</p>
            </div>
            <div className={ classnames('wrap light', styles.mar) }>
                <div className={ styles.innerWrap}>
                    <h3 className={ styles.question }>Какой компании принадлежит Билетопоиск?</h3>
                    <button className={ styles.toggle }></button>
                </div>
                <p className={ styles.answer }>C 15 октября 2013 года сервис принадлежит компании «Яндекс»</p>
            </div>
            <div className={classnames('wrap light', styles.mar)}>
                <div className={ styles.innerWrap}>
                    <h3 className={ styles.question }>Как купить билет на Билетопоиск?</h3>
                    <button className={ styles.toggle }></button>
                </div>
                <p className={ styles.answer }> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ipsam.</p>
            </div>
            <div className={classnames('wrap light')}>
                <div className={ styles.innerWrap}>
                    <h3 className={ styles.question }>Как оставить отзыв на Билетопоиск?</h3>
                    <button className={ styles.toggle }></button>
                </div>
                <p className={ styles.answer }>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos soluta eligendi, aspernatur nam nisi id.</p>
            </div>
        </div>
    )
}