//@react
import React from "react";
//@css
import './Destaquefilme.css';


export default ({item}) =>{

    let gridDedados = new Date(item.first_air_date)
    let genres = []
   for(let posicao in item.genres){
    genres.push(item.genres[posicao].name)
   }
   let descricao = item.overview
   return(
       
        <section className="linhafilmes" style={{
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="linhafilme--vertical">
                <div className="linhafilme--horizontal">
                    <div className="linhafilme--nome">
                        {item.original_name}
                    </div>
                    <div className="linhafilme--informacao">

                        <div className="linhafilme--pontos">
                            {item.vote_average} pontos
                        </div>
                        <div className="linhafilme--ano">
                            {gridDedados.setFullYear}
                        </div>
                        <div  className="linhafilme--temporada">
                            {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's':''}
                        </div>
                    </div>
                    <div className="linhafilme--descricao">
                        {descricao}
                    </div>
                    <div className="linhafilme--botoes">
                        <div className="linhafilme--btn-watch">
                        <a href={`/watch/${item.id}`} className="linhafilme--watch">
                            Assistir
                        </a>
                        </div>
                      <div className="linhafilme--btn-add">
                        <a href={`/List/add/${item.id}`} className="linhafilme--minhalist">
                           + Minha Lista
                        </a>
                      </div>
                        
                    </div>
                    <div className="linhafilme--genero">
                        <strong>Gêneros: </strong>{genres.join(', ')}
                    </div>
                </div>
            </div>
        </section>

   );
}