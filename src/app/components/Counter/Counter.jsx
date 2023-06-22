
'use client'

import { useDispatch } from 'react-redux'
import styles from './Counter.module.css'
import { CounterAmount } from './CounterAmount'
import { cartSlice } from '@/redux/features/cart'

export function Counter() {
       const dispatch = useDispatch()

        return (
        <div className={ styles.wrap }>
                <button className={ styles.decrement } onClick={ () => dispatch(cartSlice.actions.decrement('123'))}>-</button>
               <CounterAmount />
                <button className={ styles.increment } onClick={ () => dispatch(cartSlice.actions.increment('123'))}>+</button>
                
        </div>
        )  
}