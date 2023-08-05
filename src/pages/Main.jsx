import { useState } from "react";
import FlimInfo from "../components/FlimInfo";
import FlimYear from "../components/FlimYear";
import { data } from "../helper/data";

const Main = () => {
  const [info, setInfo] = useState("2022");
  return (
    <div>
      <div className="App my_card m-auto mt-5 ">
        <div className="main d-flex gap-5 p-3">
          <FlimYear data={data} setInfo={setInfo} />
          <FlimInfo data={data} info={info} />
        </div>
      </div>
    </div>
  );
};

export default Main;