import { CharacterAPIRest, EpisodeAPIRest, LocationAPIRest } from "../types.ts";
import { Episode } from "./Episode.ts";

export const Character = {
    origin:async(parent:CharacterAPIRest):Promise<LocationAPIRest | null> => {
        if(parent.origin){
            const origin = await fetch(parent.origin.url);
            return origin.json(); 
        }else{
            return null; 
        }
    }, 
    location:async(parent:CharacterAPIRest):Promise<Array<LocationAPIRest>>=>{
            const location = await fetch(parent.location.url); 
            return location.json(); 
    },
    episode:async(parent:CharacterAPIRest):Promise<EpisodeAPIRest[]>=>{
        const episodes = await Promise.all(
            parent.episode.map(async(episode)=>{
                const ep = await fetch(episode); 
                return ep.json(); 
            })
        ); 
        return episodes ;
    }
}; 