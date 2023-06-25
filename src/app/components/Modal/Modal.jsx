import styles from './Modal.module.css'
import classnames from 'classnames'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartSlice } from '@/redux/features/cart'

export function Modal({id}) {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)

    return (
        <div className={classnames("wrap light", styles.wrap)}>
            <div className={styles.innerWrap}>
                <h4>Удаление билета</h4>
                <button className={ styles.close }></button>
            </div>
            <p className={styles.content}>Вы уверены, что хотите удалить билет?</p>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={() => {
                    
                    dispatch(cartSlice.actions.reset(id))
                    console.log(cart);
                }
                    
                    }>Да</button>
                <button className={styles.button}>Нет</button>
            </div>
        </div>
    )
}