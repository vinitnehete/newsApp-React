import './Card.css'
const Card = ({ src,headline ,discription , date , handleClick}) =>{
    return(

        <div className="container">
            <div className="image">
                <img src={src} alt={headline}></img>
            </div>
            <div className="main">
                    <div>   
                    <h6>{headline}</h6>
                    <p>{discription}</p>
                    <span>{date}</span>
                    

                    <div>
                    <button className='fav' onClick={()=>handleClick({headline})} >Add to Fav</button>
                    </div>
                    </div>
                   
                    
            </div>

            
        </div>
    )
}


export default Card;