


export interface CharactersAllData {
    id: number,
    name: string,
    status: string,
    species: string,
    gender: string,
    image: string,
    episode: string[],
    url: string,
    created: string
}

const requestApi = async() => { 

    try {
        
        const request = await fetch( 'https://rickandmortyapi.com/api/character')
        const res = await request.json();
        const data:CharactersAllData[] = await res.results
        // console.log(data);
        return data;

    } catch (error:any) {
        
        console.log(error.message);
    }

};

export {
    requestApi,   
}