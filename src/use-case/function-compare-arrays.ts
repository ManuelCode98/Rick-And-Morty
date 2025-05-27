
interface ComparaArray {
    array1: any[];
    array2: any[];
    comparator: '===' | '!==';
}

const compareArray = ( { array1, comparator, array2 }:ComparaArray ) =>{

    const value1:any = JSON.stringify( array1 );
    const value2:any = JSON.stringify( array2 );
    let result: boolean = true 

    if( comparator === '===' ) result= value1 === value2;
    if( comparator === '!==' ) result = value1 !== value2;
    return  result
}

export {
    compareArray
}