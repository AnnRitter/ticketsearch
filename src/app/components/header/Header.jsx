import styles from './Header.module.css'
import Link from 'next/link'

export function Header() {
return (
    <header className="dark">
        <Link href="/">
            <h1 >Билетопоиск</h1>
        </Link>
        <Link  href="/cart">
            <img src="/basket.svg" width="32" height="32" alt="cart" />
        </Link>
    </header>
)
}