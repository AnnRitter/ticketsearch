import styles from './Filter.module.css'
import classnames from 'classnames'
import { FilterName } from '../FilterName/FilterName'
import { FilterSelect } from '../FilterSelect/FilterSelect'
export function Filter() {
return (
    <div className={classnames("wrap light", styles.wrap)}>
        <h5 className={ styles.title }>Фильтр поиска</h5>
        <FilterName />
        <FilterSelect title="Жанр"/>
        <FilterSelect title="Кинотеатр" />
    </div>
)
}