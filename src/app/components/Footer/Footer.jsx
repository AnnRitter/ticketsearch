import { styles } from './Footer.module.css'
import Link from 'next/link'

export function Footer() {
  return (
      <footer className="dark">
        <Link href="/faq">
          <div>Вопросы-ответы</div>
        </Link>
        <Link href='/about'>
          <div>О нас</div>
        </Link>
      </footer>
  )
  }