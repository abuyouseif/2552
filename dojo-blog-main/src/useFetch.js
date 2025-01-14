import { useEffect, useState } from "react"

let useFetch = (url) => {
    let [data, setData] = useState (null)
    let [isPending, setIsPending] = useState (true)
    let [error, setError] = useState(null)
    
    useEffect(() => {
        let abortCont = new AbortController()
        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
                .then(res => {
                    if(!res.ok) {
                        throw Error("Coud not fetch data for that resource")
                    }
                    return res.json()
                })
                .then (data => {
                    setData(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch(err => {
                    if (err.name = "AbortError") {
                        console.log("Fetch aborted")
                    } else {
                        setIsPending(false)
                        setError(err.message)
                    }
                })
        }, 1000);
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;