import React from 'react'
import '../Styles/Subhead.css'
function Subhead(props) {


  return (
      <div className='navbarTitleContainer typedOutContainer'>
    <div className="navbarTitle whiteText typedOut">{props.data}</div>
  
    </div>
  )
}

export default Subhead