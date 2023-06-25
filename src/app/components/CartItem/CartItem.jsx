import styles from './CartItem.module.css'
import classnames from 'classnames'
import Link from 'next/link'
import { Counter } from '../Counter/Counter'
import { createPortal } from 'react-dom'
import { Modal } from '../Modal/Modal'
import { useState } from 'react'

export function CartItem({film}) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <div className={classnames("wrap light", styles.wrap)}>
            <div className={ styles.titleWrap }>
                {/* <Image src= {film.posterUrl} width="100" height="120" alt="poster" /> */}
                <img src={film.posterUrl} className={ styles.img } alt="poster" />
                <div className="">
                    <Link href={`film/${film.id}`}>
                    <h4 className={ styles.title }>{ film.title }</h4>
                    </Link>
                    <p className={ styles.text }>{ film.genre }</p>
                </div>
            </div>
            <div className={styles.closeWrap}>
                <Counter id = {film.id} />
                {isModalOpen && createPortal(<Modal id={film.id}/>, document.body)}
                <button className={ styles.close } onClick={() => setIsModalOpen((isOpen) => !isOpen)}></button>
            </div>
       
        </div>
    )
}