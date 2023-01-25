import { useEffect, useState } from "react";
import axios from "axios";

const url = axios.create({
    baseURL: "https://type.fit/api/quotes"
})

export function NewQuote(){
    const [getQuote, setGetQuote] = useState([]) 

    const getPosts = async() => {
        
        try {
            const response = await axios.get("https://type.fit/api/quotes");
            const numHandom = () => Math.floor(Math.random() * response.data.length) + 1;
            
            const quote = response.data[numHandom()]

            console.log(quote)
           
            setGetQuote(quote)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts()
    },[])

    return (
        <div className="text-white">
            <h1>
                {getQuote.length === 0 ? (<p>Loading...</p>) : (
                        <div id="quote">
                            <h2>
                                {getQuote.text}
                            </h2>
                            <span>
                                {getQuote.author}
                            </span>
                        </div>
                )}
            </h1>
        </div>
    );
}