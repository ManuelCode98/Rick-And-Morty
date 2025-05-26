import { useState } from 'react';
import { Characters } from '../App';
import { enableMicrophone } from '../services/enable-microphone';

// La inicializo y la exporto para poder cambiar el estado de buttonState desde otro archivo
export let exportButtonState:any;
export let onChangeVoice:any;

const SearchCharacters = ( { characters }:Characters )=>{ 

    const [ inputCurrentValueState, setInputCuurentValueState ] = useState<string>('')
    const [ nameFoundState, setNameFoundState ] = useState<string[]>([]);
    const [ buttonState, setButtonState ] = useState<string>('start');

    exportButtonState = setButtonState;

    const onChange = ( {target}:any )=>{ 

        // Agregamos cada valor de input por teclado
        setInputCuurentValueState( target.value )
    };
    onChangeVoice = ( value:string )=>{

        // Agregamos cada valor de input por voz
        setInputCuurentValueState( value )
    }

    const characterNames = characters.map( character => character.name)
    

    const nameFound = characterNames.filter( characterName => {

        let result:boolean = false 
        if( inputCurrentValueState.length !== 0 ){

            result = characterName.toLowerCase().startsWith( inputCurrentValueState.toLowerCase())
        }
        return result;
    })

        
    nameFound.length !== 0 && JSON.stringify( nameFound ) !== JSON.stringify( nameFoundState ) &&
    setNameFoundState( nameFound ) 
        
    nameFound.length === 0 && nameFoundState.length !== 0 && 
    setNameFoundState( [] );
    



    return (

        <div className="Search-container" >
            <div className='container-inputs'>
                <input className='input-search' type="search" value={ inputCurrentValueState } onChange={ onChange } placeholder="Busca un personaje..."/>
                { buttonState === 'start'? 
                    <button onClick={ enableMicrophone } >Iniciar</button> :
                    <button onClick={ enableMicrophone } >Detener</button>
                }
            </div>
            <div className='search-results'>
                { 
                    nameFoundState.map( name => (
                        <p>{ name }</p>
                    )) 
                }
            </div>
        </div>

    )


};

export {
    SearchCharacters
}