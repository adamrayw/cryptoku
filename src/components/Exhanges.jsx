import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Exhanges() {
    const [exchanges, setExchanges] = useState([])
    const [loading, setLoading] = useState(true);


    const fetchData = async () => {
        const data = await axios.get('https://api.coingecko.com/api/v3/exchanges', {
            params: {
                per_page: 8,
                page: 1,

            }
        })
        setExchanges(data.data)
        console.log(exchanges);
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className='mt-20 text-left max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-gray-800 font-bold md:text-4xl text-2xl'>Exchanges</h1>
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
                {exchanges.map((ex) => {
                    return (
                        <a href={ex.url} class="block py-6 px-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                            <div className='flex items-center'>
                                <img src={ex.image} alt="ex" class="md:h-12 md:w-12 w-6 h-6 rounded-full" />
                                <h5 class="md:text-xl ml-4 text-sm font-bold tracking-tight text-gray-800">{ex.name}</h5>
                            </div>
                        </a>
                    )
                })}
            </div>)}
        </div>

    );
}
