import { useEffect } from "react"
import { ShowCharacters } from "../App"


const ResultCharacters = ( { showCharacters }:ShowCharacters ) => {

    console.log(showCharacters);



  return (
    <div className='search-results'>
      { 
        showCharacters.map( name => (
          <p>{ name }</p>
        )) 
      }
    </div>
  )
}

export {
    ResultCharacters
}
