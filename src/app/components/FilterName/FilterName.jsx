import styles from './FilterName.module.css'
import { useState } from 'react'

export function FilterName({setActiveName}) {
   
    return (
        <div className={ styles.wrap }>
            <p className={ styles.title }>Название</p>
            <input className={ styles.input } type="text" name="" id="" placeholder="Введите название" onInput={(e) => {
                let current = e.target.value
                setActiveName(current)
                
            }}/>
        </div>
    )
}