import React, { useState } from 'react'
import "./Search.css"

const Search = ({handleSubmit}) => {




      
  return (
    <div >
<form className="searchform cf" >
  <input className='searchBtn' type="text" placeholder="Is it me you’re looking for?" onChange={(e)=>handleSubmit(e.target.value)} />
  <button type="submit">Search</button>
</form>

    </div>
  )
}

export default Search