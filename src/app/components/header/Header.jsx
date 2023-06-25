'use client'

import styles from './Header.module.css'
import Link from 'next/link'
import { CartIcon } from '../CartIcon/CartIcon'
import store from '../../../redux/services/store'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
export function Header() {

    const [sum, setSum] = useState()
    const cart = useSelector((state) => state.cart)
    
    const calcSum = (obj) => {
        
        if (Object.keys(obj).length) {
            return Object.values(obj).reduce((a, b) => a + b)
            
        } 
    }

    useEffect(() => {
        const sumValue = calcSum(cart)
        setSum(sumValue)
    }, [cart])

    return (
        <header className="dark">
            <Link href="/">
                <h1>Билетопоиск</h1>
            </Link>
            <Link  href="/cart">
            <CartIcon amount={sum}/>
            </Link>
        </header>
    )
}