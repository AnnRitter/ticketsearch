import { Filter } from "./components/Filter/Filter"
import { Display } from "./components/Display/Display"

export default function Home() {
  return (
    <div className="flexHorizontal">
        <Filter />
        <Display />

    </div>
  )
}
