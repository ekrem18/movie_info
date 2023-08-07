
const FlimYear = ({ data, setInfo }) => {


    return (
        <div className="d-flex flex-column" >
            {
                data.map(item=> 
                <button onClick={()=>setInfo(item.date)} type="button" className=" btn mt-3 " key={item.id}>
                {item.date}
                </button> )
            }
        </div>
    )
}

export default FlimYear