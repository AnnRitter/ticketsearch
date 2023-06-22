import styles from './CartIcon.module.css'

export function CartIcon() {
    return (
        <div className={ styles.wrap }>
            <div className={ styles.counter }>30</div>
            <img src="/basket.svg" width="32" height="32" className={ styles.img } alt="cart" />
        </div>
    )
}