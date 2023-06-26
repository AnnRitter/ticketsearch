import styles from './FilterName.module.css'
import { useState } from 'react'

export function FilterName({setActiveName}) {
    const [value, setValue] = useState('')
    return (
        <div className={ styles.wrap }>
            <p className={ styles.title }>Название</p>
            <input className={ styles.input } type="text" name="" id="" placeholder="Введите название" value={value} onChange={(e) => {
                setValue(e.currentTarget.value)
                setActiveName(value)
            }}/>
        </div>
    )
}