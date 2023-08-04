

const FilmInfo = ({data,info}) => {
  // console.log(info);
  // console.log(data);


  const filteredData = data.filter( item => item.date === info  )
  
const{body,date,title,img,rate,tags} = filteredData

  return (
   

<div className=" right_card pt-3 ">
      <h1 className="text-primary">{title}</h1>
      <p>{body}</p>
      <p className="text-danger">{tags.join("/")}</p>
      <p>
        <span>{rate}</span>
        <span className="text-success">{rate.toFixed(1)}/10</span>
      </p>
      <div classname="card p-1 mb-3 " style={{ width: "35vw" }}>
        <img
          src={img}
          className="card-img-top img-thumbnail border border-primary card"
          alt="..."
        />
        
      </div>
    </div>

  
  )
}

export default FilmInfo