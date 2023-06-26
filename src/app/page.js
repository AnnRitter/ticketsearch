
import { useSelector } from 'react-redux'
import {store} from '../redux/services/store'
import { MainPage } from './components/MainPage/MainPage'


export default function Home() {
  

  return (
    <div className="main">
            <MainPage />
        </div>
  )
}

