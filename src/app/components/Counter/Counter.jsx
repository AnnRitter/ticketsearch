
'use client'

import { useDispatch } from 'react-redux'
import styles from './Counter.module.css'
import { CounterAmount } from './CounterAmount'
import { cartSlice } from '@/redux/features/cart'
import { useSelector } from "react-redux"
import { selecTicketCount } from "@/redux/features/cart/selector"

export function Counter({id, setIsModalOpen, needModal}) {
        const dispatch = useDispatch()
        const filmsAmount = useSelector((state) => 
        selecTicketCount(state, id)
        );
        return (
        <div className={ styles.wrap }>
                <button className={ styles.decrement } disabled={!filmsAmount} onClick={ () => {
                        if(needModal && filmsAmount > 1) dispatch(cartSlice.actions.decrement(id))
                        if(needModal && filmsAmount === 1) setIsModalOpen((isOpen) => !isOpen)
                        if (!needModal) dispatch(cartSlice.actions.decrement(id))
                }}>-</button>
               <CounterAmount filmsAmount={filmsAmount}/>
                <button className={ styles.increment } disabled={filmsAmount >= 30} onClick={ () => {dispatch(cartSlice.actions.increment(id))}}>+</button>
                
        </div>
        )  
}