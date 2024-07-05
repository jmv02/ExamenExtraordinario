
export type CharacterAPIRest={
    id:string; 
    name:string;
    status:string; 
    type:string; 
    gender:string; 
    origin:LocationAPIRest; 
    image:string; 
    episode:string[]; 
    location:LocationAPIRest; 
    created:string; 
}

export type EpisodeAPIRest = {
    id:string; 
    name:string; 
    air_date:string; 
    episode:string[]; 
    characters:string[]; 
    created:string; 
}

export type LocationAPIRest ={
    id:string; 
    name:string;
    type:string; 
    dimension:string; 
    residents:string[]; 
    created:string;
    url:string;  
    
}