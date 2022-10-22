//@minha token do site TMDB
const chaveTokenApi = 'a62e09a0a93e9830e14fc0618c0ebafa';
//@Url para requisicao de dados TMDB
const urlRequisicaoApi = 'https://api.themoviedb.org/3';

const requisicaoFetch = async (pontofinal)=>{
    
    const req = await fetch(`${urlRequisicaoApi}${pontofinal}`)
    const json = await req.json();
    return json;

}

export default {

    getListaDeFilmes: async () =>{
        return [
                {
                    slug:'originals',
                    title:'Originais do Netflix',
                    items: await requisicaoFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${chaveTokenApi}`)
                },
                {
                    slug:'trending',
                    title:'Recomenado para você',
                    items: await requisicaoFetch(`/trending/all/week?language=pt-BR&api_key=${chaveTokenApi}`)
                },
                {
                    slug:'toprated',
                    title:'Em Alta',
                    items: await requisicaoFetch(`/movie/top_rated?language=pt-BR&api_key=${chaveTokenApi}`)
                },
                {
                    slug:'action',
                    title:'Ação',
                    items: await requisicaoFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${chaveTokenApi}`)
                },
                {
                    slug:'comedy',
                    title:'Comedia',
                    items:await requisicaoFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${chaveTokenApi}`)
                },
                {
                    slug:'horror',
                    title:'Terror',
                    items:await requisicaoFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${chaveTokenApi}`)
                },
                {
                    slug:'romance',
                    title:'Romances',
                    items:await requisicaoFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${chaveTokenApi}`)
                },
                {
                    slug:'documentary',
                    title:'Documentarios',
                    items:await requisicaoFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${chaveTokenApi}`)
                }
        ]    
    },
    getInfoFilmes: async (movieId, type) =>{
        let informacao = {}
        
        if(movieId){
            switch(type) {
                case 'movie':
                    informacao = await requisicaoFetch(`/movie/${movieId}?language=pt-BR&api_key=${chaveTokenApi}`) 
                    break

                case 'tv':
                    informacao = await requisicaoFetch(`/tv/${movieId}?language=pt-BR&api_key=${chaveTokenApi}`)
                    break
                default:
                    informacao =  null
                    break    
            }
        }

        return informacao
    }
}