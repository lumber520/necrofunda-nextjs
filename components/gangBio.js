import React from 'react';
import Image from "next/image";

function GangBio({imgSrc, name, bio, imgOrder }) {
    return (
        <>

                <section className='grid lg:grid-flow-col items-center justify-items-center m-auto max-w-7xl gap-24 md:gap-16 lg:gap-4 mt-8 lg:pt-0'>
                <article className={imgOrder} >
                    <Image className='pb-5 lg:pb-0 hover:animate-pulse' src={imgSrc} width='480' height='380'/>
                </article>
                <article  className='max-w-lg bg-polygon bg-gangs-blue bg-cover animate-fade-in-down'>
                    <article className='p-3 shadow-2xl md:mt-5 lg:mt-0'>
                        <section className='bg-white text-center -m-14 shadow-2xl'>
                    <h2 className='text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 leading-relaxed bg-white bg-opacity-80'>{name}</h2>
                        </section>
                    <p className='mt-14 py-7 px-4 text-white text-lg'>{bio}</p>
                    </article>
                </article>
                </section>

        </>
    )
}


export default GangBio;