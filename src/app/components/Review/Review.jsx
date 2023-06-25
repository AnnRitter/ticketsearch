import styles from './Review.module.css'
import classnames from 'classnames'

export function Review({review}) {
    return (
        <div className={classnames("wrap light", styles.wrap)}>
            <div className={styles.defaultImg}></div>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h4 >{review.name}</h4>
                    <p className={ styles.rating }>Оценка: <span>{review.rating}</span> </p>
                </div>
                
                <p>{review.text}</p>
            </div>
        </div>
    )
}