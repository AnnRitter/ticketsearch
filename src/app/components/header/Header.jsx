import styles from './Header.module.css'
import Link from 'next/link'
import { CartIcon } from '../CartIcon/CartIcon'

export function Header() {
return (
    <header className="dark">
        <Link href="/">
            <h1>Билетопоиск</h1>
        </Link>
        <Link  href="/cart">
           <CartIcon />
        </Link>
    </header>
)
}