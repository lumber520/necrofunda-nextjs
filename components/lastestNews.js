import {React, useState} from 'react';
import useInView from "react-cool-inview";

function LatestNews({newsitems}) {
    {  if (newsitems === undefined){
        newsitems = [' ']
    }}
    const reversedNewsItems = newsitems.reverse();
    const newTag = reversedNewsItems[0];
    const today = new Date();
    const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    const time = today.getHours() + ":" + today.getMinutes();
    const dateTime = date + ' ' + time;
    const {observe, inView} = useInView({
        threshold: 0.25, // Default is 0
        onEnter: ({unobserve}) => unobserve()

    });
    return (
        <>
            <section className="bg-blue-800 text-green-200">
            <h2 className='text-center pt-3 text-2xl font-medium'>Vox News</h2>
            <p className='text-center pb-2'>{dateTime}</p>
            </section>
            {(newsitems.length <= 1) ?
                <article className='bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4' role="alert"><p className='text-center'>No
                    News items available</p></article> :
                <section className={`text-gray-600 body-font overflow-hidden`}>
                    <div className="container px-5 py-12 mx-auto ">
                        <div className="-my-8">
                            <div className="py-8 grid mx-auto justify-items-center flex-col-reverse">
                                <section ref={observe} className='divide-y-2 divide-blue-500 p-6'>
                                    {reversedNewsItems.map((news) => (
                                        <article key={news.id * 2} className='border-l-8 border-green-500 max-w-lg '>
                                            <div className="md:flex-grow shadow-lg p-5 mb-4  even:border-green-500">
                                                {(newTag === news) ?
                                                    <p className='max-w-max rounded-full bg-indigo-600 uppercase px-2 py-1 text-sm mr-3 text-white'>
                                                        NEW</p> : ''}
                                                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2 pt-4">{news.title}</h2>
                                                <p className="leading-relaxed pb-3">{inView && news.text}</p>
                                                <p className='max-w-max text-sm'>{news.date}</p>
                                            </div>
                                        </article>
                                    ))}
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
            }
            </>

)}
export default LatestNews;