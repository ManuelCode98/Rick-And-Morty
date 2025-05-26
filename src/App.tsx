import { useEffect, useState } from 'react';
import './App.css';
import { requestApi, CharactersAllData } from './services/request-api';
import { SearchCharacters } from './components/search-characters';


export interface NameCharacters {
  id: number, name: string, 
}

export interface Characters {
  characters: NameCharacters[] 
}


function App( ) {

  const [ allDataState, setAllDataState ] = useState<CharactersAllData[]>([]);
  const [ nameCharactersState, setNameCharactersState ] = useState<NameCharacters[]>([])


  useEffect(() => {
    const dataRequest = async()=>{

      try {
        const result:CharactersAllData[] | undefined = await requestApi();

        if(result != undefined || result != null ){

          setAllDataState( result )
          
          const characters = result.map( character => {

            return { id: character.id, name: character.name }
          })

          setNameCharactersState( characters )

        };


      } catch (error:any) {
        console.log(error.message)
      } finally {

        console.log('Termino')
      }

    }

    dataRequest()      
    
  }, []);


  return ( 
  
    <div className='app-container'>
      <SearchCharacters characters = { nameCharactersState } ></SearchCharacters>

    </div>
  

   )
}

export default App
