import FilmInfo from "./FilmInfo"
import FilmYear from "./FilmYear"
import { data } from "../helper/data"


const Home = () => {
  return (
    <div className="d-flex gap-5 p-3">
        <FilmYear/>
        <FilmInfo/>
        
    </div>
  )
}

export default Home