import { Filter } from '../Filter/Filter'
import styles from './Main.module.css'

export function Main() {
  return (
      <div className={ styles.background }>
        <Filter />
      </div>
  )
  }