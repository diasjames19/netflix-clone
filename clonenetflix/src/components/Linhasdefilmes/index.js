import React, {useState} from 'react';
import './Linhasdefilmes.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'


export default ({title, items})=>{
    const [scrollx, setScrollx] = useState(0);
    const handleLeftArrow = ()=>{
        let x = scrollx + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0
        }
        setScrollx(x)
    }
    const handleRightArrow = ()=>{
            let x = scrollx - Math.round(window.innerWidth / 2);
            let listaW = items.results.length * 150;
            if((window.innerWidth - listaW) > x){
                x = (window.innerWidth - listaW) - 60
            }
            setScrollx(x)
    }
    return(
        <div className="linhadefilme">
            <h2>{title}</h2>
            <div className='linhadefilme--esquerda' onClick={handleLeftArrow}>
                    <NavigateBeforeIcon  style={{fontsize: 50}}/>
            </div>
            <div className='linhadefilme--direita' onClick={handleRightArrow}>
                    <NavigateNextIcon style={{fontsize: 50}} />
            </div>
            <div className='linhadefilme--listaarea'>
                <div className='linhadefilme--lista' style={{
                    marginLeft:scrollx,
                    width:items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, chave)=>(
                            <div className='linhadefilme--item' key={chave}>
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                            </div>
                            

                            
                            ))}
                            
                </div>

            </div>
        </div>
    )
}