import styles from './Header.module.css'
export function Header() {
return (
    <header >
        <h1 className={styles.title}>Билетопоиск</h1>
        <img src="/basket.svg" width="32" height="32" alt="cart" />
    </header>
)
}