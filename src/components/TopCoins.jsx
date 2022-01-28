import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownLong, faArrowUpLong } from '@fortawesome/free-solid-svg-icons';

export default function TopCoins() {
    const [topCoin, setTopCoin] = useState([])
    const [loading, setLoading] = useState(true);


    const fetchData = async () => {
        const data = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params: {
                vs_currency: 'idr',
                per_page: 4,
                page: 1,
                order: 'market_cap_desc',
                price_change_percentage: '1h,24h,7d',
                sparkline: true
            }
        })
        setTopCoin(data.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
        setInterval(() => {
            fetchData()
        }, 10000);
    }, [])

    return (
        <div className='mt-20 text-left max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center'>
                <h1 className='text-gray-800 font-bold md:text-4xl text-2xl'>Top Coins</h1>
                <Link to="/coins">More</Link>
            </div>
            <hr className='w-16 my-6' />
            {loading ? (<>
                <div className='grid md:grid-cols-4 grid-cols-2 md:gap-x-6 gap-6 items-center justify-around'>
                    <div className='w-full h-full rounded-md animate-pulse border p-4 space-y-6'>
                        <div className='w-full h-4 rounded-full animate-pulse bg-gray-200'></div>
                        <div className='w-full h-4 rounded-full animate-pulse bg-gray-200'></div>
                        <div className='w-full h-4 rounded-full animate-pulse bg-gray-200'></div>
                    </div>
                    <div className='w-full h-full rounded-md animate-pulse border p-4 space-y-6'>
                        <div className='w-full h-4 rounded-full animate-pulse bg-gray-200'></div>
                        <div className='w-full h-4 rounded-full animate-pulse bg-gray-200'></div>
                        <div className='w-full h-4 rounded-full animate-pulse bg-gray-200'></div>
                    </div>
                    <div className='w-full h-full rounded-md animate-pulse border p-4 space-y-6'>
                        <div className='w-full h-4 rounded-full animate-pulse bg-gray-200'></div>
                        <div className='w-full h-4 rounded-full animate-pulse bg-gray-200'></div>
                        <div className='w-full h-4 rounded-full animate-pulse bg-gray-200'></div>
                    </div>
                    <div className='w-full h-full rounded-md animate-pulse border p-4 space-y-6'>
                        <div className='w-full h-4 rounded-full animate-pulse bg-gray-200'></div>
                        <div className='w-full h-4 rounded-full animate-pulse bg-gray-200'></div>
                        <div className='w-full h-4 rounded-full animate-pulse bg-gray-200'></div>
                    </div>
                </div>
            </>) : (<div className='grid md:grid-cols-4 grid-cols-2 md:gap-x-6 gap-4 items-center justify-around'>
                {topCoin.map((coin) => {
                    return (
                        <a href="/" class="block py-6 px-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                            <img src={coin.image} alt="coin" class="md:h-12 md:w-12 w-6 h-6 rounded-full mb-4" />
                            <div className='flex items-center justify-between'>
                                <h5 class="md:text-xl text-sm font-bold tracking-tight text-gray-800">{coin.symbol.toUpperCase()}/IDR</h5>
                                <div className='flex items-center'>
                                    <p className={`md:text-base text-xs ${coin.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'}`}>{`${coin.price_change_percentage_24h.toString().slice(0, -3)}%`}</p>
                                    {coin.price_change_percentage_24h < 0 ? (<FontAwesomeIcon icon={faArrowDownLong} className='ml-1 text-xs text-red-500' />) : (<FontAwesomeIcon icon={faArrowUpLong} className='ml-1 text-xs text-green-500' />)}

                                </div>
                            </div>
                            <p class="font-normal md:text-base text-sm text-gray-500 mt-2">Rp{new Intl.NumberFormat(['ban', 'id']).format(coin.current_price)}</p>
                        </a>
                    )
                })}
            </div>)}



        </div>
    )
}
