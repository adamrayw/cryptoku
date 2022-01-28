import { useEffect, useState } from "react"
import axios from "axios"
import spinner from '../assets/img/spinner.svg'

export default function Trending() {
    const [listCoin, setListCoin] = useState([])
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        const data = await axios.get('https://api.coingecko.com/api/v3/exchanges', {
            params: {
                per_page: 100,
                page: 1,

            }
        })
        setListCoin(data.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="text-left max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8">
            <div>
                <h1 className="text-gray-800 font-bold text-4xl mb-2">Exchanges</h1>

                {loading && (<>
                    <img src={spinner} className="animate-spin" alt="spinner" width="20" />
                </>)}
            </div>
            <hr className="w-16 my-6" />
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead>
                                    <tr>
                                        <th className="pr-8 py-3 text-gray-800 w-16">#</th>
                                        <th className="pr-8 py-3 text-gray-800">Exchange</th>
                                        <th className="pr-8 py-3 text-gray-800">Year Established</th>
                                        <th className="pr-8 py-3 text-gray-800">Trade Volume 24h (BTC)</th>
                                        <th className="pr-8 py-3 text-gray-800">Visit Website</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listCoin.map((e) => {
                                        return (
                                            <tr key={e.id}>
                                                <td>
                                                    <p className="pr-8 py-3 text-gray-800">{e.trust_score_rank}</p>
                                                </td>
                                                <td className="pr-8 py-3 text-gray-800">
                                                    <div className="flex items-center space-x-4">
                                                        <img src={e.image} alt="logo" width="28" />
                                                        <p className="font-medium">{e.name}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="pr-8 py-3 text-gray-800">{e.year_established}</p>
                                                </td>
                                                <td>
                                                    <p className="pr-8 py-3 text-gray-800">{e.trade_volume_24h_btc}</p>
                                                </td>

                                                <td>
                                                    <a href={e.url} className="pr-8 py-3 text-gray-800">Visit</a>
                                                </td>

                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            {/* {trendingCoins.map((e) => {
                    return (
                        <div className="border rounded-md px-6 py-8 flex justify-items-start space-x-4" key={e.item.id}>
                            <img src={e.item.large} alt="logo" width="60" />
                            <div>
                                <p >{e.item.name}</p>
                                <p >Rank : {e.item.market_cap_rank}</p>
                                <p >Harga: {e.item.price_btc}</p>
                            </div>
                        </div>
                    )
                })} */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}