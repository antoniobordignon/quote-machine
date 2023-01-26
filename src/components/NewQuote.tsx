import { useEffect, useState } from "react";
import { DotsThree } from "phosphor-react";
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
           
            setGetQuote(quote)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts()
    },[])

    return (
        <div className="text-white flex justify-center items-center mr-7">
            <h1>
                {Object.keys(getQuote).length === 0 ? (<DotsThree className="text-blue-400 animate-ping" size={32} />) : ( 
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