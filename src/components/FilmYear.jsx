

const FilmYear = ({data}) => {

  console.log(data);
  return (
    <div>

      {data.map(item=> <div className="border-0 fs-4 fw-bold text-secondary " key={item.id}>{item.date}</div> )
      }

    </div>
  )
}

export default FilmYear