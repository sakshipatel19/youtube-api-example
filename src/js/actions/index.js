export function selectMovie(movie){
 return{
        type:"MOVIE_SELECTED",
        payload:movie
  }
}

export default function selectAction(e){
return{
  type:"STATUS",
  e
  }
}
