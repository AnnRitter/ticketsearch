'use client'

import { Filter } from "../Filter/Filter"
import { Display } from "../Display/Display"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { filmsActions } from "@/redux/features/movies"
// import { useGetMoviesQuery } from '@/redux/services/movieApi'
// import store from '../../../redux/services/store'

export function MainPage() {
    // const { data, isLoading, error } = useGetMoviesQuery()
    // const localGenres = {}
    const [cinemas, setCinemas] = useState()
    const dispatch = useDispatch()
    const films = useSelector((state) => state.films)
    const filters = useSelector((state) => state.filters)
    const [active, setActive] = useState()
    const [result, setResult] = useState()

    useEffect(() => {
        fetch('http://localhost:3001/api/cinemas')
        .then(response =>  response.json())
        .then(result => {
            setCinemas(result)
        })
    }, [])

    useEffect(() => {
        let result = []
       let common = []
       let activeAmount = Object.values(filters).map(curr => {
        if(curr === 'Не выбран') {
            return false
        } else return !!curr

       }).filter(curr => curr).length

       setActive(activeAmount)
       let filteredCinema = filterByCinema(films, filters.activeCinema, cinemas)
       let filteredName = filterByName(films, filters.activeName)
       let filteredGenre = filterByGenre(films, filters.activeGenre)
       
        if (filteredCinema) common = common.concat(filteredCinema)
        if (filteredName) common = common.concat(filteredName)
        if (filteredGenre) common = common.concat(filteredGenre)

        const map = new Map()

        for (let i = 0; i < common.length; i++) {
            map.set(common[i].id, 0)
        }
        
        for (let i = 0; i < common.length; i++) {
            if (map.has(common[i].id)) {
               map.set(common[i].id, map.get(common[i].id) + 1)
            }
        }
        
        // console.log(map);
        // console.log(activeAmount);
        for (let amount of map.entries()) {
            if(amount[1] === activeAmount) {
                result.push(films.find(film => film.id === amount[0]))
            }
          }
    //    setActive()
    
        setResult(result)
    //    console.log('result', result);
    }, [filters, cinemas])

    function filterByName (arr, name) {
        // console.log('name', name);
        return name && arr.filter(item => item.title.toLowerCase().includes(name.toLowerCase()))
    }
    function filterByGenre (arr, genre) {
        if(genre === 'Не выбран') return 
        return genre && arr.filter(item => item.genre === genre)
    }
    function filterByCinema (arr, currentCinema, cinemas) {
        if(currentCinema === 'Не выбран') return 
        const moviesArr = cinemas && currentCinema && cinemas.find(item => {
           if ( item.name.toLowerCase() === currentCinema.toLowerCase()) return item
        }).movieIds
       
        const res = []
        if(moviesArr) {
            for (let i = 0; i < moviesArr.length; i++) {
                res.push(arr.find(item => item.id === moviesArr[i]))
            }
        }
       
    
        return res
    }
   
    
    useEffect(() => {
        fetch('http://localhost:3001/api/movies')
        .then((response) => response.json())
        .then((actualData) => {
            if (!films.length) dispatch(filmsActions.getData(actualData))
        } )
    }, []);

    return (
        <div className="flexHorizontal">
            <Filter cinemas={cinemas} />
            <Display data={active ? result : films} />
        </div>
    )
}