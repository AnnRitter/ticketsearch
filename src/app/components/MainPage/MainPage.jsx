'use client'

import { Filter } from "../Filter/Filter"
import { Display } from "../Display/Display"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { filmsActions } from "@/redux/features/movies"
// import { useGetMoviesQuery } from '@/redux/services/movieApi'
// import store from '../../../redux/services/store'

export function MainPage() {
    // const { data, isLoading, error } = useGetMoviesQuery()
    // const localGenres = {}
    const dispatch = useDispatch()
    const films = useSelector((state) => state.films)

    useEffect(() => {
        fetch('http://localhost:3001/api/movies')
        .then((response) => response.json())
        .then((actualData) => {
            if (!films.length) dispatch(filmsActions.getData(actualData))
        } )
    }, []);

    return (
        <div className="flexHorizontal">
            <Filter />
            <Display data={films} />
        </div>
    )
}