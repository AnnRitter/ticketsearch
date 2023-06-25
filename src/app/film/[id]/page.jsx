'use client'

import { useParams } from 'next/navigation'
import { useGetMovieQuery  } from '@/redux/services/movieApi'
// import { useGetReviewQuery } from '@/redux/services/reviewApi'
import { FilmInfo } from '@/app/components/FilmInfo/FilmInfo'
import { Review } from '@/app/components/Review/Review'
import { useState, useEffect } from 'react'
export default function Film () {
    const [reviews, setReviews] = useState()
    const params = useParams()
    const { data, isLoading, error } = useGetMovieQuery(params.id)
    // const { review, reviewIsLoading, reviewError } = useGetReviewQuery(params.id)

    useEffect(() => {
        fetch(`http://localhost:3001/api/reviews?movieId=${params.id}`)
        .then(response =>  response.json())
        .then(reviews => {
        setReviews(reviews)
        })
    }, [])

    return (
        <div>
            <FilmInfo film={data}/>
            
        <ul>
            {
            reviews && reviews.map((review) => {
                return (
                <Review key={review.id} review={review}/> 
                )
            })
        }
        </ul>
    
        </div>
    )
}