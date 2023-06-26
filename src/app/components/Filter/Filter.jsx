'use client'

import styles from './Filter.module.css'
import classnames from 'classnames'
import { FilterName } from '../FilterName/FilterName'
import { useSelector } from "react-redux"
import React, { useState, useContext, useCallback, useEffect } from 'react'

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

FilterDropDown.Item = function MenuItem ({title, setActiveGenre }) {
    const {switchGroup} = useContext(MenuContext)
    const { placeholder, setPlaceholder } = useContext(GroupContext)

    return <div className={ styles.item }>
        <button onClick={() => {
            setPlaceholder((title))
            setActiveGenre((title))
            switchGroup((title))
        }} className="">{title} </button>
    </div>
}

export function Filter() {
    const films = useSelector((state) => state.films
    );
    let genres =[]
    films.forEach(film => {
        if (!genres.includes(film.genre)) genres.push(film.genre)
    })

    useEffect(() => {
        fetch('http://localhost:3001/api/cinemas')
        .then(response =>  response.json())
        .then(cinemas => {
        console.log(cinemas);
        })
    }, [])

    const [activeGenre , setActiveGenre] = useState()
    const [activeName , setActiveName] = useState()
    const [activeCinema , setActiveCinema] = useState()
    console.log(activeGenre, activeName, activeCinema);

    let activeFilters = [
        {'activeGenre': activeGenre},
        {'activeName': activeName},
        {'activeCinema': activeCinema}
    ]
    // let filteredFilms = []
    // useEffect(() => {
    //    filteredFilms = films.filter((film) => {
    //        if(activeFilters['activeGenre'] && activeFilters['activeGenre'] === film.genre) return film
    //     })
    // }, [activeFilters])
    // console.log(filteredFilms);
    return (
        <div className={classnames("wrap light", styles.wrap)}>
            <h5 className={ styles.mainTitle }>Фильтр поиска</h5>
                <FilterName setActiveName={setActiveName}/>
                <FilterDropDown>
                    <FilterDropDown.Group title="Жанр" defaultPlaceholder="Выберите жанр">
                        <FilterDropDown.Item title='Не выбран' setActiveGenre={setActiveGenre}/>
                        {
                            genres.map((genre) => {
                                return <FilterDropDown.Item key={genre} title={genre} setActiveGenre={setActiveGenre}/>
                            })
                        }
                    </FilterDropDown.Group>
                    <FilterDropDown.Group title="Кинотеатр" defaultPlaceholder="Выберите кинотеатр">
                        <FilterDropDown.Item title='Не выбран'/>
                        <FilterDropDown.Item title="Кинотеатр 1"/>
                        <FilterDropDown.Item title="Кинотеатр 2"/>
                    </FilterDropDown.Group>
                </FilterDropDown>
        

            
        </div>
    )
}