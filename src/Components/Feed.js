import { useEffect, useState } from "react"
import Card from "./Card"
import './Feed.css'

const Feed = () =>{
    const [news , setNews] = useState([])

    const newsApi = async() =>{
        const response = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=21299f9bfb164e018fe177650b91830c")

        const result = await response.json()

        console.log(result.articles)
        setNews(result.articles)
    }
    useEffect(()=>{
        newsApi()
    },[])


    const [fav , setFav] = useState([])
    const handleClick = (name) =>{
    
       


        const isDuplicate = fav.some((item) => item.headline === name.headline);
        //.some return that some of the element in the array statisfies the condition andif satisfies return true other wise false
        
   
    if (!isDuplicate) {
      setFav([...fav, name]);
    }
  
    }

    console.log(fav);
    return (
        <>        
        <div className="main">
        <div className="main-section">
            <div>
                {news.map((item)=>{
                    return <Card  src ={item.urlToImage} headline={item.title} discription ={item.description} date={item.publishedAt} handleClick={handleClick} />
                })}
            </div>
        </div>
        

        
        <div className="fav1">

            <p>Favourite News</p>
            {fav.map((item)=>{
                return <div>{item.headline}</div>
            })}
        </div>
        </div>
        </>

    )
}


export default Feed