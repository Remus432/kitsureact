import React from 'react'

const AnimeList = ({animes}) => {
    console.log(animes);
  return (
    <div>
      {
          animes.map(anime => (
              <React.Fragment>
                <h1>{anime.attributes.canonicalTitle}</h1>
                <img src={anime.attributes.coverImage.small}/>
              </React.Fragment>
          ))
      }
    </div>
  )
}


export default AnimeList;