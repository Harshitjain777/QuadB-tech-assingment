import React from 'react'

function Summary({row , setSelectedRow , setSummaryOpen}) {
  function removehandleselection(){
    setSelectedRow({});
    setSummaryOpen(false);
}
  return (
    <div>
       <h1 style={{display:'flex' , justifyContent:'center' , alignItems:'center'}} className="display-6">A brief Summary about the movie - {row.show.name}</h1>
       <div style={{display:'flex' , alignItems:'center' , justifyContent:'center'}} >

       <img src={row.show.image.medium}   alt="..."/>
       </div>
       <div className="shadow-sm p-3 mb-5 bg-body-tertiary rounded">
       <div style={{fontSize:'200%' , fontFamily:'sans-serif'}} className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">{row.show.summary}</div>
       </div>
       <div style={{display:'flex' , alignItems:'center' , justifyContent:'center'}}>
       <button onClick={()=>{removehandleselection()}} style={{marginBottom:'10%'}} className="btn btn-primary">Go Back</button>
       </div>
    </div>
  )
}

export default Summary