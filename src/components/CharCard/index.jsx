import{TiInfo} from 'react-icons/ti'
import '../CharCard/styles.css'
function Card({personagem}){

    return (
        <div className="card">
            <h2>{`${personagem.name.slice(0,15)}...`}</h2> 
            <p>{personagem.species}</p>
            <img src={personagem.image} alt='foto do personagem'></img>

        </div>

    )



}

export default Card