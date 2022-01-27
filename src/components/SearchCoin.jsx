import axios from "axios";
import { useState } from "react"

export default function SearchCoin() {
    const [result, setResult] = useState([]);
    const [keyword, setKeyword] = useState([]);
    const [open, setOpen] = useState(false)

    async function onSearch(e) {
        setKeyword(e.target.value)
        setOpen(true)
        const response = await axios.get('https://api.coingecko.com/api/v3/search?query=' + keyword);
        console.log(response);
        setResult(response.data.coins)
        if (e.target.value.length < 1) {
            setOpen(false)
        }


    }

    return (
        <div className="relative w-full">
            <input type="text" className="w-full text-sm focus:ring-2 transition-all focus:ring-gray-300 px-4 py-2 rounded-lg bg-white border" placeholder="Search Coin..."
                onChange={(e) => onSearch(e)} />
            {open && (
                <div className="absolute text-left h-40 overflow-y-auto bg-white w-full mt-2 p-4 shadow rounded-lg">
                    <h1 className="font-semibold mb-2">Coins</h1>
                    {result.map((e) => {
                        return (
                            <div>
                                <p className="text-sm mb-2">{e.name}</p>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}