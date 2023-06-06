import React from 'react'

function Navbar() {
  return (
    <div>
    <nav className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
  <div className="container-fluid">
  <div style={{display:'flex'}}>

    <img style={{height:'15%' , width:'15%' , marginRight:'5%'}} src="https://upload.wikimedia.org/wikipedia/commons/5/5a/MM_Television_logo_%28former_TV_station_in_Bulgaria%29.png" alt="" />
    <h1 style={{fontFamily:'monospace', fontSize:'200%' , marginTop:'2%'} }  href="#">Movies-Mania</h1>
  </div>
   
   
  </div>
</nav>
    </div>
  )
}

export default Navbar