import { useEffect, useState } from "react"
import axios from "axios"
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import spinner from '../assets/img/spinner.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownLong, faArrowUpLong } from '@fortawesome/free-solid-svg-icons';

export default function Trending() {
    const [listCoin, setListCoin] = useState([])
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        const data = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params: {
                vs_currency: 'idr',
                per_page: 100,
                page: 1,
                order: 'market_cap_desc',
                price_change_percentage: '1h,24h,7d',
                sparkline: true
            }
        })
        setListCoin(data.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
        setInterval(() => {
            fetchData()
        }, 60000);
    }, [])

    return (
        <div className="text-left max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8">
            <div>
                <h1 className="text-gray-800 font-bold text-4xl">Cryptocurrency Prices by Market Cap</h1>
                <div className=" mt-4 flex items-center space-x-4 h-6">
                    <div className="h-2 w-2 rounded-full bg-gray-800 animate-ping"></div>
                    <p className="font-base text-xs">Updated every 1 minute</p>
                    {loading && (<>
                        <img src={spinner} className="animate-spin" alt="spinner" width="20" />
                    </>)}
                </div>
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
                                        <th className="pr-8 py-3 text-gray-800" onClick={() => {
                                            console.log(listCoin.sort((a, b) => b - a));
                                        }}>Coin</th>
                                        <th className="pr-8 py-3 text-gray-800">Price (IDR)</th>
                                        <th className="pr-8 py-3 text-gray-800">24h</th>
                                        <th className="pr-8 py-3 text-gray-800">Market Cap</th>
                                        <th className="pr-8 py-3 text-gray-800">Last 7 days</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listCoin.map((e) => {
                                        return (
                                            <tr key={e.id}>
                                                <td>
                                                    <p className="pr-8 py-3 text-gray-800">{e.market_cap_rank}</p>
                                                </td>
                                                <td className="pr-8 py-3 text-gray-800">
                                                    <div className="flex items-center space-x-4">
                                                        <img src={e.image} alt="logo" width="28" />
                                                        <p className="font-medium">{e.name}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="pr-8 py-3 text-gray-800">Rp{new Intl.NumberFormat(['ban', 'id']).format(e.current_price)}</p>
                                                </td>
                                                <td>
                                                    <div className="flex items-center pr-8">
                                                        {e.price_change_percentage_24h < 0 ? (<FontAwesomeIcon icon={faArrowDownLong} className='mr-1 text-xs text-red-500' />) : (<FontAwesomeIcon icon={faArrowUpLong} className='mr-1 text-xs text-green-500' />)}
                                                        <p className={` py-3 ${e.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'}`}>{`${e.price_change_percentage_24h.toString().slice(0, -3)}%`}</p>
                                                    </div>
                                                </td>

                                                <td>
                                                    <p className="pr-8 py-3 text-gray-800">Rp{new Intl.NumberFormat(['ban', 'id']).format(e.market_cap)}</p>
                                                </td>
                                                <td>
                                                    <Sparklines data={e.sparkline_in_7d.price} width={100} margin={6}>
                                                        <SparklinesLine style={{ fill: "none" }} />
                                                        <SparklinesSpots />
                                                    </Sparklines>
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