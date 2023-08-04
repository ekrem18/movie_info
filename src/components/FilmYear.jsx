

const FilmYear = ({data}) => {

  console.log(data);
  return (
    <div>

      {data.map(item=> <div key={item.id}>{item.date}</div> )
      }

    </div>
  )
}

export default FilmYear