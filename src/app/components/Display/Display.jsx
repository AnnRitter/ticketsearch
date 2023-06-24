'use client'

import styles from './Display.module.css'
import classnames from 'classnames'
import { useState, useEffect } from "react"
import { FilmPreview } from '../FilmPreview/FilmPreview'
// import { useGetMoviesQuery } from '@/redux/services/movieApi'


export function Display({data}) {

// const { data, isLoading, error } = useGetMoviesQuery()

return (
    <div>
      <ul className={ styles.wrap }>
        {
          data && data.map((film) => {
            return (
              <FilmPreview key={film.id} film={film}/> 
            )
          })
       }
      </ul>
    </div>
)
}