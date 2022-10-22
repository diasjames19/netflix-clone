//@react
import React,{useEffect,useState} from "react";
//@api
import v3 from "./v3";
//css
import './App.css'
//@components
import DestaqueFilme from './components/Destaquefilme';
import Header from "./components/Header";
import Linhasdefilmes from "./components/Linhasdefilmes";

export default () =>{

  
  const [filmes, setFilmes ] = useState([]);
  const [blackHeader,setBlackHeader] = useState(false)
  const [destaqueFilmeData, setDestaqueFilmeData] = useState(null);

  useEffect(()=>{
    
    const scrolllistener = ()=>{
      if(window.scrollY > 10){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }
    
    }
    window.addEventListener('scroll',scrolllistener)
    return () =>{
      window.removeEventListener('scroll',scrolllistener)
    }
  },[])

  useEffect(()=>{
    const carregarTodos = async () =>{
        let coletaniaDeFilmes  = await v3.getListaDeFilmes();
        setFilmes(coletaniaDeFilmes);
        let originals = coletaniaDeFilmes.filter(posicao => posicao.slug === 'originals')
        let filmeEscolhido = Math.floor(Math.random()* (originals[0].items.results.length - 1))
        let escolhido = originals[0].items.results[filmeEscolhido]
        let informacaoDoEscolhido = await v3.getInfoFilmes(escolhido.id, 'tv');
        setDestaqueFilmeData(informacaoDoEscolhido)
        console.log(informacaoDoEscolhido)
      }
      carregarTodos();
  },[]);

  return(
        <div className="page">
          <Header black={blackHeader}/>
            {destaqueFilmeData && <DestaqueFilme item={destaqueFilmeData} />}
          <div className="lista">
            {filmes.map((item,chave)=>
              <Linhasdefilmes key={chave} title={item.title} items={item.items}/>
            )}
          </div>
          <footer>
          Feito por James Alves Dias<br/>
          Direitos de imagem para Netflix<br/>
          Dados pegos do site tmdb.org
        </footer>
               {
        filmes.length <= 0 && 
        <div className="loading">
             <img  src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/
              Netflix_LoadTime.gif" alt="Carregando"/>
        </div>
         
        }
        
        </div>

       
  );
}
