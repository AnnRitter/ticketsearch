import styles from './FilterName.module.css'


export function FilterName() {
    return (
        <div className={ styles.wrap }>
            <p className={ styles.title }>Название</p>
            <input className={ styles.input } type="text" name="" id="" placeholder="Введите название" />
        </div>
    )
}