import FlimInfo from "./FlimInfo"
import FlimYear from "./FlimYear"
import { data } from "../helper/data"
import { useState } from "react"

const Home = () => {
  const [info, setInfo] = useState(2022)

  return (
    <div className=" home d-flex gap-5 p-3 justify-content-center">
      <FlimYear data={data} setInfo={setInfo} />
      <FlimInfo data={data} info={info}  />
    </div>
  )
}

export default Home