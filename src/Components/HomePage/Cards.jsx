import React from 'react'


const Cards = ({title}) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  return (
  <div className="col-sm-2">
    <a href="#">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{capitalizeFirstLetter(title)}</h5>
        </div>
      </div>
    </a> 
  </div>


    
  )
}

export default Cards