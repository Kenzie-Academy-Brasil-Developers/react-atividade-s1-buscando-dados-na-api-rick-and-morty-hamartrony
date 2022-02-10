import Card from "../CharCard"
import '../Characters/styles.css'

function Characters({characterList}){

  
  
    return (
        <>       
            <h1>Meus Personagens</h1>
            <div className="box">
            {characterList.map((personagem)=> <Card personagem={personagem} key={personagem.id}/>)}
            </div>
        </>


    )



}

export default Characters