import { useEffect, useState } from 'react';
import './App.css';
import { requestApi, CharactersAllData } from './services/request-api';
import { SearchCharacters } from './components/search-characters';
import { ResultCharacters } from './components/result-characters';
import { compareArray } from './use-case/function-compare-arrays';


export interface NameAndIdCharacters {
  id: number, name: string, 
}

export interface CharactersProps {
  characters: NameAndIdCharacters[] 
  characterFound: Function
}

export interface NameCharacters {
  name: string[]
}

export interface ShowCharacters {
  showCharacters: string[] 
}


function App( ) {

  const [ allDataState, setAllDataState ] = useState<CharactersAllData[]>([]);
  const [ nameCharactersState, setNameCharactersState ] = useState<NameAndIdCharacters[]>([]);
  const [ characterResulFoundState, setCharacterResulFoundState ] = useState<string[]>([]);

  

  const inputData = ( characterFound:string[] )=>{ 

    const objCompareArr:any = {
      array1: characterFound, 
      comparator: '===',
      array2: characterResulFoundState
    }
    
    if( characterFound.length < 1 || compareArray( objCompareArr ) ) return
    setCharacterResulFoundState( characterFound )
    
  };


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
      <SearchCharacters characters={ nameCharactersState } characterFound={ inputData } />
      <ResultCharacters showCharacters = { characterResulFoundState } />
    </div>
  

   )
}

export default App
