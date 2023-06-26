'use client'

import styles from './Filter.module.css'
import classnames from 'classnames'
import { FilterName } from '../FilterName/FilterName'
import { useSelector, useDispatch } from "react-redux"
import React, { useState, useContext, useCallback, useEffect } from 'react'
import { filterActions } from '@/redux/features/filters'

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

FilterDropDown.Item = function MenuItem ({title, setActiveGenre, setActiveCinema, isGenre, isCinema}) {
    const {switchGroup} = useContext(MenuContext)
    const { placeholder, setPlaceholder } = useContext(GroupContext)

    return <div className={ styles.item }>
        <button onClick={() => {
            setPlaceholder((title))
            isGenre && setActiveGenre((title))
            isCinema && setActiveCinema((title))
            switchGroup((title))
        }} className="">{title} </button>
    </div>
}

export function Filter({cinemas}) {
    const [activeGenre , setActiveGenre] = useState()
    const [activeName , setActiveName] = useState()
    const [activeCinema , setActiveCinema] = useState()
    
    const films = useSelector((state) => state.films
    );
    let genres =[]
    films.forEach(film => {
        if (!genres.includes(film.genre)) genres.push(film.genre)
    })

   

    const dispatch = useDispatch()
let activeFilters ={activeName, activeGenre, activeCinema}
   
    // let filteredFilms = []
    useEffect(() => {
        dispatch(filterActions.getFilters(activeFilters))
    }, [activeFilters])
    // console.log(filteredFilms);
    return (
        <div className={classnames("wrap light", styles.wrap)}>
            <h5 className={ styles.mainTitle }>Фильтр поиска</h5>
                <FilterName setActiveName={setActiveName}/>
                <FilterDropDown>
                    <FilterDropDown.Group title="Жанр" defaultPlaceholder="Выберите жанр">
                        <FilterDropDown.Item title='Не выбран' setActiveGenre={setActiveGenre} isGenre={true} isCinema={false}/>
                        {
                            genres.map((genre) => {
                                return <FilterDropDown.Item key={genre} title={genre} setActiveGenre={setActiveGenre} isGenre={true} isCinema={false} />
                            })
                        }
                    </FilterDropDown.Group>
                    <FilterDropDown.Group title="Кинотеатр" defaultPlaceholder="Выберите кинотеатр">
                        <FilterDropDown.Item title='Не выбран'setActiveCinema={setActiveCinema} isGenre={false} isCinema={true}/>
                        {
                            cinemas && cinemas.map((cinema) => {
                                return <FilterDropDown.Item key={cinema.id} title={cinema.name} setActiveCinema={setActiveCinema} isGenre={false} isCinema={true}/>
                            })
                        }
                    </FilterDropDown.Group>
                </FilterDropDown>
        

            
        </div>
    )
}