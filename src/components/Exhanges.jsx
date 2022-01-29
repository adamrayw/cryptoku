import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// import Swiper core and required modules
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

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
            <div className='flex justify-between items-center'>
                <h1 className='text-gray-800 font-bold md:text-4xl text-2xl'>Top Exchanges</h1>
                <Link to="/exchanges">More</Link>
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
            </>) : (<div>
                <Swiper

                    autoplay={{
                        "delay": 1600,
                        "disableOnInteraction": false
                    }}
                    spaceBetween={16}
                    breakpoints={{
                        "240": {
                            "slidesPerView": 2,
                            "spaceBetween": 6
                        },
                        "640": {
                            "slidesPerView": 2,
                            "spaceBetween": 20
                        },
                        "768": {
                            "slidesPerView": 2,
                            "spaceBetween": 40
                        },
                        "1024": {
                            "slidesPerView": 4,
                            "spaceBetween": 50
                        }
                    }}

                >
                    {exchanges.map((ex) => {
                        return (
                            <SwiperSlide key={ex.id}>
                                <a href={ex.url} class="block my-2 py-6 px-4 h-fit -max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                                    <div className='flex items-center'>
                                        <img src={ex.image} alt="ex" class="md:h-12 md:w-12 w-6 h-6 rounded-full" />
                                        <h5 class="md:text-xl text-center ml-4 text-sm font-bold tracking-tight text-gray-800 truncate overflow-hidden">{ex.name}</h5>
                                    </div>
                                </a>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>)}

        </div>

    );
}
