import { useEffect, useState } from "react";

const useFetchData_From_Custom_API = (url) => {
    const [data, setData]= useState(null)  
    const [isPending, setIsPending]= useState(true)
    const [err, setErr]= useState(null)
    
    useEffect(() => {
        const abortControll= new AbortController();
        
        setTimeout(async() => {
            await fetch(url, {signal: abortControll.signal})
            .then(response => {
                if(!response.ok){
                    throw Error('There was an error please try again....')
                }
                return response.json();
        })
            .then (data => {
                setData(data)
                setIsPending(false)
                setErr(null)
        })
            .catch(error => {
                if (error.name === 'AbortError') {
                    console.log('Request aborted');
                  } else {
                    setIsPending(false)
                    setErr(error.message)
                  }
            })
        }, 1000);

        return () => abortControll.abort();

    }, [url]);

    return {data, isPending, err}
}

export default useFetchData_From_Custom_API;