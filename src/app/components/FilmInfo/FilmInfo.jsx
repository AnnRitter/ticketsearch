import styles from './FilmInfo.module.css'
import classnames from 'classnames'

export function FilmInfo({film}) {
   
    if(film) {
        return (
            <div className={classnames("wrap light", styles.wrap)}>
                <img src={film.posterUrl} alt="poster"  className={ styles.img }/>
                <div className={ styles.infoWrap}>
                    <h2 className={ styles.title }>{film.title}</h2>
                    <div className={ styles.innerWrap }>
                        <h4>Жанр:</h4>
                        <p className={ styles.info }>{film.genre}</p>
                    </div>
                    <div className={ styles.innerWrap }>
                        <h4>Год выпуска:</h4>
                        <p className={ styles.info }>{film.releaseYear}</p>
                    </div>
                    <div className={ styles.innerWrap }>
                        <h4>Рейтинг:</h4>
                        <p className={ styles.info }>{film.rating}</p>
                    </div>
                    <div className={ classnames(styles.innerWrap, styles.bigGap) }>
                        <h4>Режиссер:</h4>
                        <p className={ styles.info }>{film.director}</p>
                    </div>
                    <h4 className={ styles.h4 }>Описание</h4>
                    <p className={ styles.description }>{film.description}</p>
                </div>
            </div>
        )
    }
    
}