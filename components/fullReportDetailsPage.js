import React from 'react';
import GameReports from "./gameReports";
import Image from "next/image";
function fullReportDetailsPage({imgSrc, title, descr}) {

    return (
        <section className='container grid m-auto max-w-max mb-9 items-center'>
            <section className='bg-white shadow-xl animate-fade-in-down mt-5 items-center'>
            <h2 className='text-center text-2xl py-3 bg-rect-light bg-cover bg-no-repeat bg-center bg-secondary-blue text-white'>{title}</h2>
            <Image className='gamefullimg' src={imgSrc} alt='Image of battle' width='1000' height='500' />
            <article className='p-5 text-left animate-slide-right'>
            {descr.map((reportParagraph) => (
                <p key={reportParagraph}>{reportParagraph}</p>
            ))}
            </article>
            </section>
        </section>
    );

}

export default fullReportDetailsPage;