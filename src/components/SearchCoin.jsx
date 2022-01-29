import { faClose, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState, useEffect } from "react"
import spinner from '../assets/img/spinner.svg'

export default function SearchCoin() {
    const [result, setResult] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [close, setClose] = useState(false)


    const fetchCoin = async () => {
        if (keyword.length > 0) {
            setLoading(true)
            const response = await axios.get('https://api.coingecko.com/api/v3/search?query=' + keyword);
            setResult(response.data.coins)
            setLoading(false)
        }

    }

    useEffect(() => {
        // fetchCoin()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className=" md:w-60 w-full">
            <div className="relative">
                <input type="text" className="w-full text-sm focus:ring-2 transition-all focus:ring-gray-300 px-4 py-2 rounded-lg bg-white border" placeholder="Search Coin..."
                    onClick={() => {
                        setOpen(true)
                    }} />
            </div>
            {open && (
                <div className="fixed bg-black bg-opacity-10 flex flex-row justify-center items-center z-10 top-1/2 left-1/2 text-left transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                    <div className="h-96 mx-2 overflow-y-auto bg-white md:w-4/12 w-full mt-2 md:p-10 p-6 shadow rounded-lg z-50 space-y-4">
                        <div className="relative">
                            <input type="text" className=" w-full text-sm focus:ring-2 transition-all focus:ring-gray-300 px-4 py-2 rounded-lg bg-white border" value={keyword} autoFocus placeholder="Search Coin..."
                                onChange={(e) => {
                                    setClose(true)
                                    setKeyword(e.target.value)
                                    setTimeout(() => {
                                        fetchCoin()
                                    }, 500)
                                    setOpen(true)

                                }} />
                            {close && (<button className="absolute right-2.5 top-2 hover:cursor-pointer" onClick={() => {
                                setKeyword("")
                                setOpen(false)
                                setLoading(false)
                                setClose(false)
                            }}>
                                <FontAwesomeIcon icon={faClose} />
                            </button>)}
                        </div>
                        <div className="h-2">
                            {loading && (<>
                                <img src={spinner} className="animate-spin" alt="spin" width={20} />
                            </>)}
                        </div>
                        {result.map((e) => {
                            return (
                                <div key={e.id} className=" flex items-center justify-between space-x-2 text-gray-800">
                                    <div className="flex items-center space-x-2">
                                        <img src={e.thumb} alt={e.name} width={20} />
                                        <p className="text-sm font-semibold mb-2 mr-1">{e.name} <span>({e.symbol})</span></p>
                                    </div>
                                    <small className="ml-auto">#{e.market_cap_rank}</small>
                                </div>
                            )
                        })}
                        {result.length < 1 && (
                            <div className="h-20 my-auto text-center px-10">
                                <FontAwesomeIcon icon={faKey} className="text-gray-800" />
                                <p className="flex justify-center items-center text-gray-800 text-center">Use more specific keywords</p>
                            </div>)}
                    </div>
                </div>
            )}
        </div>
    )
}