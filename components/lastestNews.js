import {React, useState} from 'react';
import useInView from "react-cool-inview";

function LatestNews({newsitems}) {
    {
        if (newsitems === undefined || newsitems == null) {
            newsitems.toString();
        }

    }
    console.log(newsitems)
    let reversedNewsItems = newsitems.reverse();
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
            <section className="bg-green-400 text-green-200">
                <h2 className='text-center pt-3 text-2xl font-medium'>Vox News</h2>
                <p className='text-center pb-2'>{dateTime}</p>
            </section>
            {(newsitems.length <= 1) ?
                <article className='bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4' role="alert"><p
                    className='text-center'>No
                    News items available</p></article> :
                <section className={`body-font overflow-hidden `}>
                    <div className="container py-12 mx-auto ">
                        <div className="">
                            <div
                                className="py-8 grid mx-auto justify-items-center flex-col-reverse  bg-news-items-bg bg-cover bg-no-repeat bg-center md:bg-top max-w-5xl">
                                <section ref={observe}
                                         className='divide-y-2 divide-blue-500 mt-8 pb-32 md:pb-0 transform skew-x-1'>
                                    {reversedNewsItems.map((news) => (
                                         <article key={news.id * 2} className='pb-5 max-w-lg text-white'>

                                            <div className="md:flex-grow p-5 mb-4 bg-gradient-to-r">
                                                {(newTag === news) ?
                                                    <p className='max-w-max rounded-full bg-indigo-600 uppercase px-2 py-1 text-sm mr-3'>
                                                        Latest</p> : ''}
                                                 <h2 className="text-2xl font-medium title-font mb-2 pt-4"> {`>>> ${news.title}`}  </h2>
                                                <p className="leading-relaxed pb-3"> {`${inView && news.para1}`}</p>
                                                <p className="leading-relaxed pb-3"> {`${news.para2}`}</p>
                                                {(news.para3 !== undefined) ?  <p className="leading-relaxed pb-3"> {`${inView && news.para3}`} </p> : ''}
                                                {(news.para4 !== undefined) ?
                                                    <p className="leading-relaxed pb-3"> {`${news.para4}`} </p> : ''}
                                                {(news.para5 !== undefined) ?
                                                    <p className="leading-relaxed pb-3"> {`${news.para5}`}</p> : ''}
                                                {(news.para6 !== undefined) ?
                                                    <p className="leading-relaxed pb-3"> {`${news.para6}`}</p> : ''}
                                                {(news.para7 !== undefined) ?
                                                    <p className="leading-relaxed pb-3"> {`${news.para7}`}</p> : ''}
                                                {(news.para8 !== undefined) ?
                                                    <p className="leading-relaxed pb-3"> {`${news.para8}`}</p> : ''}
                                                {(news.para9 !== undefined) ?
                                                    <p className="leading-relaxed pb-3"> {`${news.para9}`}</p> : ''}
                                                {(news.para10 !== undefined) ?
                                                    <p className="leading-relaxed pb-3"> {`${news.para10}`}</p> : ''}
                                                {(news.para11 !== undefined) ?
                                                    <p className="leading-relaxed pb-3"> {`${news.para12}`}</p> : ''}
                                                {(news.para12 !== undefined) ?
                                                    <p className="leading-relaxed pb-3"> {`${news.para12}`}</p> : ''}

                                            </div>
                                             <p className='max-w-max text-sm'>{news.date}</p>
                                        </article>
                                    ))}
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>

    )
}

export default LatestNews;