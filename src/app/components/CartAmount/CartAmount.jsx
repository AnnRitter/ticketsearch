import styles from './CartAmount.module.css'
import classnames from 'classnames'

export function CartAmount({amount}) {

    return (
        <div className={classnames("wrap light", styles.wrap)}>
            <h4>Итого билетов:</h4>
            <h4>{amount}</h4>
        </div>
    )
}