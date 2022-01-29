import React, { useState, useEffect } from 'react';
import Marquee from "react-fast-marquee";
import axios from 'axios';

export default function Tickers() {
    const [tickers, setTickers] = useState([])
    const [loading, setLoading] = useState(true);


    const fetchData = async () => {
        const data = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/tickers', {
            params: {
                page: 1,
                include_exchange_logo: true,
                depth: false

            }
        })
        setTickers(data.data.tickers)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="py-3 bg-gray-800">
            {loading ? (<>
                <div className='flex items-center justify-around'>
                    <div className='w-full h-1 rounded-md animate-pulse px-4 py-2'>
                        <div className='w-full h-4 rounded-full animate-pulse bg-gray-200'></div>

                    </div>
                    <div className='w-full h-1 rounded-md animate-pulse px-4 py-2'>
                        <div className='w-full h-4 rounded-full animate-pulse bg-gray-200'></div>

                    </div>
                    <div className='w-full h-1 rounded-md animate-pulse px-4 py-2'>
                        <div className='w-full h-4 rounded-full animate-pulse bg-gray-200'></div>

                    </div>
                    <div className='w-full h-1 rounded-md animate-pulse px-4 py-2'>
                        <div className='w-full h-4 rounded-full animate-pulse bg-gray-200'></div>

                    </div>
                    <div className='w-full h-1 rounded-md animate-pulse px-4 py-2'>
                        <div className='w-full h-4 rounded-full animate-pulse bg-gray-200'></div>

                    </div>
                    <div className='w-full h-1 rounded-md animate-pulse px-4 py-2'>
                        <div className='w-full h-4 rounded-full animate-pulse bg-gray-200'></div>

                    </div>
                </div>
            </>) : (<Marquee speed="60" gradient={false}>
                {tickers.map((ticker, index) => {
                    return (
                        <div key={index} className="text-white font-bold text-sm md:mx-10 mx-8 flex items-center space-x-2">
                            <img src={ticker.market.logo} alt="" className='rounded-full bg-white' width="20" />
                            <h4>{ticker.market.name} (BTC)</h4>
                            <p className='font-normal'>{new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                            }).format(ticker.converted_last.usd)}</p>
                        </div>
                    )
                })}
            </Marquee>)}

        </div>
    );
}
