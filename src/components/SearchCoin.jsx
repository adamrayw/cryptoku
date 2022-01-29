import axios from "axios";
import { useState, useEffect } from "react"
import spinner from '../assets/img/spinner.svg'

export default function SearchCoin() {
    const [result, setResult] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const filteredCoins = result.filter((coin) => {
        return coin.name.toLowerCase().includes(keyword.toLowerCase()) || coin.symbol.toLowerCase().includes(keyword.toLowerCase())
    })

    useEffect(() => {
        const fetchCoin = async () => {
            setLoading(true)
            const response = await axios.get('https://api.coingecko.com/api/v3/search?query=' + keyword);
            setResult(response.data.coins)
            setLoading(false)
        }
        fetchCoin()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="relative w-full">
            <input type="text" className="w-full text-sm focus:ring-2 transition-all focus:ring-gray-300 px-4 py-2 rounded-lg bg-white border" placeholder="Search Coin..."
                onChange={(e) => {
                    setKeyword(e.target.value)
                    setOpen(true)
                    if (e.target.value.length < 1) {
                        setOpen(false)
                    }
                }} />
            {open && (
                <div className="absolute text-left h-40 overflow-y-auto bg-white w-full mt-2 p-4 shadow rounded-lg z-50 space-y-4">
                    {loading && (<>
                        <img src={spinner} className="animate-spin" alt="spin" width={20} />
                    </>)}
                    {filteredCoins.map((e) => {
                        return (
                            <div key={e.id} className="flex items-center space-x-2">
                                <img src={e.thumb} alt={e.name} width={20} />
                                <p className="text-sm mb-2">{e.name}</p>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}