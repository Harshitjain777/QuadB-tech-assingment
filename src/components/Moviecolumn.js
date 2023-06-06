import React from 'react'



function Moviecolumn({row , setSelectedRow , setSummaryOpen}) {
  function handleselection(row){
    setSelectedRow(row);
    setSummaryOpen(true);
}
  return (
    <div style={{margin:'5%'}} >
        <div className="card" style={{width: "18rem"}}>
  <img src={row.show.image.medium} className="card-img-top" alt="..."/>
  <div className="card-body" >
    <h3 className="card-title">{row.show.name}</h3>
    <p><span style={{fontWeight:"bold"}}>Language</span>: {row.show.language}</p>
    <p><span style={{fontWeight:"bold"}}>Generes</span>: {row.show.genres[0]}  {row.show.genres[1]? <span>,{row.show.genres[1]}</span>:null} {row.show.genres[2]? <span>,{row.show.genres[2]}</span>:null}</p>
    <p><span style={{fontWeight:"bold"}}>Premiered</span> {row.show.premiered}</p>
    <p><span style={{fontWeight:"bold"}}>Rating</span> {row.show.rating.average?row.show.rating.average:<span>NULL</span>}</p>
    <p><span style={{fontWeight:"bold"}}>Status</span> {row.show.status}</p>
    <button onClick={() => handleselection(row)} style={{marginRight:'10px'}} className="btn btn-primary">Summary</button>
    <a href={row.show.url} className="btn btn-primary">More Details</a>
  </div>
</div>
    </div>
  )
}

export default Moviecolumn