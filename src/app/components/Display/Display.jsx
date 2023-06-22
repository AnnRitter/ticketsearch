import styles from './Display.module.css'
import classnames from 'classnames'

async function getData() {
  const response = await fetch('http://localhost:3001/api/movies')
  console.log(response);
  return response.json()
}

export async function Display() {
  const films = await getData()
  films.map((film) => {
    console.log(film.title, 111);
  })
return (
    <div className={classnames('wrap, light', styles.bg)}>
      <div>
        {
          films.map((film) => {
            <div key={film.id}>
              <p>{film.title}</p>

            </div>
          })
        }
      </div>
    </div>
)
}