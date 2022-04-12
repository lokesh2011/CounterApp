import React from 'react'

const Navbar = () => {
  return (
      <>
      <div onClick={()=>alert("Hello")}>Navbar</div>
      <Footer/>
      <button disabled={false}>Add</button>
      
      </>
  )
}

export default Navbar


const Footer = ()=> {
    return(
        <div>Footer</div>
    )
}