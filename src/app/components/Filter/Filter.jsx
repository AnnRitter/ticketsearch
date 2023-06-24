'use client'

import styles from './Filter.module.css'
import classnames from 'classnames'
import { FilterName } from '../FilterName/FilterName'

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
return (
    <div className={classnames("wrap light", styles.wrap)}>
        <h5 className={ styles.mainTitle }>Фильтр поиска</h5>
            <FilterName />
           <FilterDropDown>
                <FilterDropDown.Group title="Жанр" defaultPlaceholder="Выберите жанр">
                    <FilterDropDown.Item title="Комедия"/>
                    <FilterDropDown.Item title="Horror"/>
                </FilterDropDown.Group>
                <FilterDropDown.Group title="Кинотеатр" defaultPlaceholder="Выберите кинотеатр">
                    <FilterDropDown.Item title="Кинотеатр 1"/>
                    <FilterDropDown.Item title="Кинотеатр 2"/>
                </FilterDropDown.Group>
           </FilterDropDown>
       

        
    </div>
)
}