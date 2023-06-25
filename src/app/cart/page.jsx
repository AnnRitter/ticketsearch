'use client'
import { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import { CartItem } from '../components/CartItem/CartItem'


export default function Cart() {
    const [filteredFilms, setFilteredFilms] = useState()
    const cart = useSelector((state) => state.cart
    );
    const films = useSelector((state) => state.films
    );
    const ids =  Object.keys(cart)
    useEffect(() => {
        let filtered = films.filter((film) => {
            if (ids.indexOf(film.id) >=0) return film
        })
        setFilteredFilms(filtered)
    }, [cart])
    
    return (
        <ul>
          {
            filteredFilms && filteredFilms.map(film => {
              return (
                <CartItem key={film.id} film={film}/>
              )
            })
          }
          {
            <div className="emptyPage"></div>
          }
          
        </ul>
      )
    }