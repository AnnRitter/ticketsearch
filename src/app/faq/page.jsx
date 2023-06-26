'use client'

import styles from './FAQ.module.css'
import classnames from 'classnames'
import React, { useState, useContext, useCallback } from 'react'


// export const MenuContext = React.createContext(false)
export const GroupContext = React.createContext(false)

export const MenuDropDown = ({children}) => {
    const [activeGroup, setActiveGroup] = useState()
   
    

    const switchGroup = useCallback((title) => {
        setActiveGroup(activeTitle => activeTitle === title ? undefined : title)
    }, [])

    return <div className="">{children}</div>
}

MenuDropDown.Group = function MenuGroup ({children, title}) {
    
    const [isActive, setIsActive] = useState()

    return (
        <GroupContext.Provider value={{isActive, setIsActive}}>
        <div className={ styles.innerWrap}>
            <h3 className={ styles.question }>{title}</h3>
            <button className={ styles.toggle } onClick={() => {
                setIsActive((!isActive))
                // switchGroup(title)
            }}></button>
        </div>
        {isActive && <div className="">{children}</div>}
         </GroupContext.Provider>
        
    )   
}

MenuDropDown.Item = function MenuItem ({children, title}) {
    return  <div className={ styles.item }>{title}</div>
}

export default function FAQ() {
    
    return (
        <div>
            <MenuDropDown>
                <MenuDropDown.Group title="Что такое Билетопоиск?">
                    <MenuDropDown.Item title="Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."/>
                </MenuDropDown.Group>
                <MenuDropDown.Group title="Какой компании принадлежит Билетопоиск?">
                    <MenuDropDown.Item title="C 15 октября 2013 года сервис принадлежит компании «Яндекс»"/>
                </MenuDropDown.Group>
                <MenuDropDown.Group title="Как купить билет на Билетопоиск?">
                    <MenuDropDown.Item title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ipsam."/>
                </MenuDropDown.Group>
                <MenuDropDown.Group title="Как оставить отзыв на Билетопоиск?">
                    <MenuDropDown.Item title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ipsam."/>
                </MenuDropDown.Group>
            </MenuDropDown>
            
        </div>
    )
}

{/* <h2 className={ classnames("wrap light", styles.mainMar) }>Вопросы-ответы</h2>
<div className={ classnames('wrap light', styles.mar) }>
    <FilterDropDown title="Что такое Билетопоиск?"/>
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
</div> */}