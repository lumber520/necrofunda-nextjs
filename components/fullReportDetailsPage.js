import React from 'react';
import GameReports from "./gameReports";
import Image from "next/image";
function fullReportDetailsPage({imgSrc, descr}) {

    return (
        <section className='container grid m-auto max-w-max mb-9 items-center game-border-img'>
            <section className='bg-white shadow-xl items-center'>
            <Image className='gamefullimg animate-fade-in-down' src={imgSrc} alt='Image of battle' width='1000' height='500' />
            <article className='p-5 text-left'>
            {descr.map((reportParagraph) => (
                <p className="animate-fade-in-up" key={reportParagraph}>{reportParagraph}</p>
            ))}
            </article>
            </section>
        </section>
    );

}

export default fullReportDetailsPage;