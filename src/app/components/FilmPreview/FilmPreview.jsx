import styles from './FilmPreview.module.css'
import classnames from 'classnames'
import Image from 'next/image'
import { Counter } from '../Counter/Counter'
import Link from 'next/link'

export function FilmPreview({film}) {
    const url = film.posterUrl
    return (
        <div className={classnames("wrap light", styles.wrap)}>
            <div className={ styles.titleWrap }>
                {/* <Image src= {url} width="100" height="120" alt="poster" className={ styles.img }/> */}
                <img src={film.posterUrl} className={ styles.img } alt="poster" />
                <div className="">
                    <Link href={`film/${film.id}`}>
                    <h4 className={ styles.title }>{ film.title }</h4>
                    </Link>
                    <p className={ styles.text }>{ film.genre }</p>
                </div>
            </div>
          <Counter id = {film.id} needModal={false}/>
        </div>
    )
    }