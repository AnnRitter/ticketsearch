import styles from './FilterSelect.module.css'

export function FilterSelect({title}) {
    return (
        <div className={ styles.wrap }>
            <p className={ styles.title }> {title} </p>
            <input className={ styles.select } name="" id=""></input>
            <div className=""></div>
        </div>
    )
}