import React, {useState, useEffect} from "react";
import Image from "next/image";
import mostWantedList from '/pages/mostwanted/index';

function mostWanted({imgScr}) {

    return (

        <>
            <section className='bg-shiny-overlay bg-cover bg-no-repeat h-full' id="most-wanted">
                <section className="m-auto md:w-2/6 pt-10">
                <main className="relative w-full flex gap-20 snap-x snap-mandatory overflow-x-auto pb-14">
                        <div className="snap-center scroll-ml-6 shrink-0">
                            <div className="shrink-0 w-5 sm:w-30"></div>
                        </div>
                        {imgScr.map((wanted) => (
                            <div key={wanted.index + 1} className="snap-center scroll-ml-6 shrink-0 first:pl-8 last:pr-8">
                                <img key={wanted.index} alt='Wanted' src={wanted} width='368' height='502'  className="shrink-0 rounded-lg shadow-xl"/>
                            </div>
                        ))}

                    </main>
            </section>
            </section>
        </>
    )

}

export default mostWanted;
