import { useEffect, useState } from "react";
import axios from "axios";

interface NewQuoteProps {
        text: string,
        author: string,
        length: number
  }

export function NewQuote(){
    const [getQuote, setGetQuote] = useState<NewQuoteProps>(Object) 

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
                        <h2 className="font-bold italic m-7">
                            "{getQuote.text}"
                        </h2>
                        <span className="m-1">
                            ({getQuote.author ? getQuote.author : "unknown"})
                        </span>
                    </div>
                )}
            </h1>
        </div>
    );
}