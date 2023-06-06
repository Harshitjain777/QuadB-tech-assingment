import React, { useEffect, useState } from 'react'
import Moviecolumn from './Moviecolumn';
import Summary from './Summary';


function Movie() {
    const [fulldata  , setFullData]=useState([]);
    var parsedata;
    const getdata=async()=>{
        const url="https://api.tvmaze.com/search/shows?q=all";
        const data=await fetch(url);
        parsedata= await data.json();
        setFullData(parsedata);

    }
  useEffect(()=>{
    getdata();
  },[]);
 
    
  const [summaryOpen , setSummaryOpen]=useState(false);
  const [selectedRow , setSelectedRow]=useState({});
  
 

  return (
    <>{summaryOpen ? <Summary setSummaryOpen={setSummaryOpen} setSelectedRow={setSelectedRow} row= {selectedRow}/> :
    <div style={{display:'flex' , flexWrap:'wrap'}} >
     { 

        fulldata.map((val)=>
        <Moviecolumn  row={val} setSummaryOpen={setSummaryOpen} setSelectedRow={setSelectedRow}></Moviecolumn>
    
     )
     }
    
    </div>}
    </>
    
  )
}

export default Movie