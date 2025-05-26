import { exportButtonState, onChangeVoice } from "../components/search-characters";


const enableMicrophone = ( { target }:any )=>{ 

    // navigator.mediaDevices.getUserMedia( { audio: true } );

     

    if( 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window ){

        const SpeechRecognition:any = window.webkitSpeechRecognition || window.SpeechRecognition;

        const recognition = new SpeechRecognition();
        
        const buttonName = target.innerHTML;
        console.log(target.innerHTML);
                
        if( buttonName === 'Iniciar' ){

            recognition.start()
            recognition.onresult = (event:any) => {
                const result:string = event.results[0][0].transcript;
                onChangeVoice( result )
            } 
            exportButtonState('stop')

        } 
        if ( buttonName === 'Detener' ) {

            exportButtonState('start')
            recognition.stop();

                
        }
    }
};    


export {
    enableMicrophone
}