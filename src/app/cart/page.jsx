'use client'
import { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import { CartItem } from '../components/CartItem/CartItem'
import { CartAmount } from '../components/CartAmount/CartAmount'


export default function Cart() {
    const [filteredFilms, setFilteredFilms] = useState()
    const [sum, setSum] = useState()
    const cart = useSelector((state) => state.cart
    );
    const films = useSelector((state) => state.films
    );
    const ids =  Object.keys(cart)
    const calcSum = (obj) => {
        
      if (Object.keys(obj).length) {
          return Object.values(obj).reduce((a, b) => a + b)
          
      } 
    }
    useEffect(() => {
        let filtered = films.filter((film) => {
            if (ids.indexOf(film.id) >=0) return film
        })
        setFilteredFilms(filtered)

        const sumValue = calcSum(cart)
        setSum(sumValue)
    }, [cart])
  
    return (
      <div className="">
        <ul>
          {
            filteredFilms && filteredFilms.map(film => {
              return (
                <CartItem key={film.id} film={film}/>
              )
            })
           
          }
          <CartAmount amount={sum} />
           </ul>
            
          {
            <div className="emptyPage"></div>
          }
          
      </div>
       
       
      )
    }