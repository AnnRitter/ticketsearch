'use client'

import styles from './Display.module.css'
import classnames from 'classnames'
import { useState, useEffect } from "react"
import { FilmPreview } from '../FilmPreview/FilmPreview'
export function Display() {
const [films, setFilms] = useState(null)

 useEffect(() => {
        async function fetchData()  {
            const response = await fetch('http://localhost:3001/api/movies')
            const result = await response.json()
            setFilms(result)
        }
        fetchData();
    }, []);
return (
    <div>
      <ul className={ styles.wrap }>
        {
          films && films.map((film) => {
            return (
              <FilmPreview key={film.id} film={film}/> 
            )
          })
       }
      </ul>
    </div>
)
}