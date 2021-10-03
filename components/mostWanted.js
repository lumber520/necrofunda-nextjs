import React, {useState, useEffect} from "react";
import Image from "next/image";
import mostWantedList from '/pages/mostwanted/index';

function mostWanted({imgScr}) {

    return (

        <>
            <section className='bg-shiny-overlay bg-cover bg-no-repeat h-screen'>
                <section
                    className='grid grid-flow-row grid-cols-7 h-64 justify-center object-center items-center md:max-w-lg container m-auto top-padding-vw'>
                    {imgScr.map((wanted) => (
                        <input key={wanted.index * 28} className='h-5 w-5 block m-auto col-span-1 cursor-pointer' type="radio"
                               name="position"/>
                    ))}

                    <main id="carousel" className='overflow-x-auto'>
                        {imgScr.map((wanted) => (
                            <div key={wanted.index + 1} className="item">
                                <Image key={wanted.index} alt='Wanted' src={wanted} width='368' height='502'/>
                            </div>
                        ))}

                    </main>
                </section>
            </section>

        </>
    )

}

export default mostWanted;
