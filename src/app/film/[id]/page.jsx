'use client'

import { useParams } from 'next/navigation'
import { useGetMovieQuery  } from '@/redux/services/movieApi'
import { useGetReviewQuery } from '@/redux/services/reviewApi'
import { FilmInfo } from '@/app/components/FilmInfo/FilmInfo'
export default function Film () {
    
    const params = useParams()
  
    const { film, filmIsLoading, filmError } = useGetMovieQuery(params.id)
  
    const { review, reviewIsLoading, reviewError } = useGetReviewQuery(params.id)

    console.log(film);

    return (
        <div className="">
            <FilmInfo film={film}/>
        </div>
    )
}