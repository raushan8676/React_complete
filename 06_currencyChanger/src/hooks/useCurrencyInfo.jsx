import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        let mounted = true
        const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error(`Fetch failed: ${res.status}`)
                return res.json()
            })
            .then((res) => {
                if (mounted) setData(res[currency] || {})
            })
            .catch((err) => {
                console.error('Failed to load currency data', err)
                if (mounted) setData({})
            })
        return () => {
            mounted = false
        }
    }, [currency])
    return data
}

export default useCurrencyInfo;