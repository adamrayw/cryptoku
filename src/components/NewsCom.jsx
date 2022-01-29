import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default function NewsCom() {
    const [news, setNews] = useState([])

    const fetchNews = async () => {
        const data = await axios.get('https://bing-news-search1.p.rapidapi.com/news/search?q=cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day&count=8', {
            headers: {
                'x-bingapis-sdk': 'true',
                'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
                'x-rapidapi-key': '29cce2b0aemsh4493887fa8edc07p187fcdjsn3a361462fe34'
            }
        })
        setNews(data.data.value);
    }

    useEffect(() => {
        fetchNews();
    }, [])

    return (
        <div className='mt-20 text-left max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center'>
                <h1 className='text-gray-800 font-bold md:text-4xl text-2xl'>News</h1>
                <Link to="/exchanges">More</Link>
            </div>
            <hr className='w-16 my-6' />
            <div className='grid md:grid-cols-4 grid-cols-2 md:gap-x-4 gap-6 items-center justify-around'>
                {news.map((n, index) => {
                    return (
                        <a href={n.url} key={index} rel='noreferrer' target="_blank" className="flex flex-col items-center rounded-lg shadow-md md:flex-row md:max-w-xl bg-gray-800 hover:bg-gray-900 transition-all">
                            <img className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={n.image.thumbnail.contentUrl} alt="" />
                            <div className="flex flex-col justify-between px-4 md:py-2 py-4 leading-normal">
                                <h5 className="mb-2 text-sm font-bold tracking-wider text-white md:line-clamp-3 line-clamp-4">{n.name}</h5>
                                <small className='text-gray-200 text-xs line-clamp-1'>{n.provider[0].name}</small>
                            </div>
                        </a>


                    )
                })}

            </div>
        </div>
    );
}
