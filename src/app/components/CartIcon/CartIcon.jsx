import styles from './CartIcon.module.css'

export function CartIcon({amount}) {
    return (
        <div className={ styles.wrap }>
           {amount && <div className={ styles.counter }>{amount}</div>}
            <img src="/basket.svg" width="32" height="32" className={ styles.img } alt="cart" />
        </div>
    )
}