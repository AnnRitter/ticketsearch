'use client'

import styles from './Filter.module.css'
import classnames from 'classnames'
import { FilterName } from '../FilterName/FilterName'
import { useSelector } from "react-redux"
import React, { useState, useContext, useCallback } from 'react'

export const MenuContext = React.createContext(false)
export const GroupContext = React.createContext(false)

export const FilterDropDown = ({children}) => {
    const [activeGroup, setActiveGroup] = useState()
   
    

    const switchGroup = useCallback((title) => {
        setActiveGroup(activeTitle => activeTitle === title ? undefined : title)
    }, [])

    return <MenuContext.Provider value={{activeGroup, switchGroup}}>{children}</MenuContext.Provider>
}
FilterDropDown.Group = function MenuGroup ({children, title, defaultPlaceholder}) {
    const [placeholder, setPlaceholder] = useState()

    const {activeGroup, switchGroup} = useContext(MenuContext)

    return <GroupContext.Provider value={{placeholder, setPlaceholder}}>
                <div className={ styles.selectWrap }>
                    <p className={ styles.title }>{title}</p>
                    <button  onClick={() => {switchGroup(title)}} className={classnames(styles.input, activeGroup === title ? styles.active : styles.inactive) }>{!placeholder ? defaultPlaceholder : placeholder}</button>
                    { activeGroup=== title && <div className={ styles.itemWrap}>{children}</div>}
                </div>
            </GroupContext.Provider> 
}

FilterDropDown.Item = function MenuItem ({children, title }) {
    const {switchGroup} = useContext(MenuContext)
    const { placeholder, setPlaceholder } = useContext(GroupContext)

    return <div className={ styles.item }>
        <button onClick={() => {
            setPlaceholder((title))
            switchGroup((title))
        }} className="">{title} </button>
    </div>
}

export function Filter() {
    const films = useSelector((state) => state.films
    );
    let localGenres = new Map()
    let translation = ''
    films.forEach(film => {
    
        if (!localGenres.has(film.genre)) {
            if (film.genre === 'fantasy') translation = 'Фэнтези'
            if (film.genre === 'horror') translation = 'Ужасы'
            if (film.genre === 'action') translation = 'Боевик'
            if (film.genre === 'comedy') translation = 'Комедия'
            localGenres.set(film.genre, translation)
        }
    })
return (
    <div className={classnames("wrap light", styles.wrap)}>
        <h5 className={ styles.mainTitle }>Фильтр поиска</h5>
            <FilterName />
           <FilterDropDown>
                <FilterDropDown.Group title="Жанр" defaultPlaceholder="Выберите жанр">
                    
                        {
                            localGenres.forEach((genre) => {
                                console.log(genre);
                                <FilterDropDown.Item title={genre}/>
                            })
                            // localGenres && localGenres.values( (genre) => {
                            //     console.log(genre);
                            //    return (<FilterDropDown.Item title={genre}/>)
                            // }) 
                        }
                   
                    <FilterDropDown.Item title='Не выбран'/>
                    <FilterDropDown.Item title={localGenres.get('fantasy')}/>
                    <FilterDropDown.Item title={localGenres.get('horror')}/>
                    <FilterDropDown.Item title={localGenres.get('action')}/>
                    <FilterDropDown.Item title={localGenres.get('comedy')}/>
                </FilterDropDown.Group>
                <FilterDropDown.Group title="Кинотеатр" defaultPlaceholder="Выберите кинотеатр">
                    <FilterDropDown.Item title="Кинотеатр 1"/>
                    <FilterDropDown.Item title="Кинотеатр 2"/>
                </FilterDropDown.Group>
           </FilterDropDown>
       

        
    </div>
)
}