import React from 'react';
import Image from "next/image";
import Link from "next/link";

function gameReports({intro, imgSrc, battleName, url}) {
    return (
        <>
            <Link className='cursor-pointer'  href={`games/${url}`} key={url} passHref>
            <article className='cursor-pointer grid grid-flow-col shadow-md transform transition duration-500 hover:scale-110 hover:z-50 rounded '>
                <div className='gameimage block'>
                    <Image className='w-full  m-auto' src={imgSrc} layout="responsive" height='200' width='300' alt='Image of game played'/>
                    <article className='bg-white p-3'>
                    <h2>{battleName}</h2>
                    <p>{intro}</p>
                    <p className='text-purple-900'>Read more</p>
                    </article>
                </div>
            </article>
            </Link>
        </>
    );
}

export default gameReports;