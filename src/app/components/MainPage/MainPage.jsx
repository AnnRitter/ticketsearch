'use client'

import { Filter } from "../Filter/Filter"
import { Display } from "../Display/Display"
import { useGetMoviesQuery } from '@/redux/services/movieApi'
import store from '../../../redux/services/store'
export function MainPage() {
    const { data, isLoading, error } = useGetMoviesQuery()
    const localGenres = {}
  

    return (
        <div className="flexHorizontal">
            <Filter />
            <Display data={data} />
        </div>
    )
}