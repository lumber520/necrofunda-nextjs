import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from "react";
import CurrentStandings from "../components/currentStandings";

export default function Home({standingData}) {
    return (
        <div className='pb-4 mx-auto'>
            <Head>
                <title> Necro-Funda</title>
            </Head>
            <article
                className='grid mx-auto items-center py-4 animate-fade-in-down bg-hero-pattern bg-no-repeat bg-cover'>
                <Image className='max-w-xl min-w-0 map' src='/necromunda-map-main-lables.06829db0.png' alt='Map'
                       width={1154} height={803}/>
            </article>
            <article className='lg:container mx-auto'>
                <h2 className='py-3 text-2xl hover:underline delay-300'>Current Standings</h2>
                <table
                    className='table-fixed md:container text-center border-4 border-indigo-800 overflow-x-auto sm:block md:table shadow-lg items-center'>
                    <thead>
                    <tr className='bg-indigo-800 text-white'>
                        <th className='w-1/4 py-4 sm:border-r-3 sm:border-gray-600'>Team</th>
                        <th className='w-1/3 sm:border-r-3 sm:border-gray-600'>Dominator</th>
                        <th className='w-1/3 sm:border-r-3 sm:border-gray-800'>Slaughterer</th>
                        <th className='w-1/3 sm:border-r-3 sm:border-gray-600'>Creditor</th>
                        <th className='w-1/3 sm:border-r-3 sm:border-gray-600'>Warmonger</th>
                        <th className='w-1/3 border-r-3 border-gray-600'>Power Broker</th>
                    </tr>
                    </thead>
                    {standingData.map((standings) => (
                        <CurrentStandings key={standings.id} name={standings.name} dominator={standings.dominator}
                                          slaughterer={standings.slaughterer} warmonger={standings.warmonger}
                                          powerBroker={standings.powerBroker} creditor={standings.creditor}
                                          bgColour={standings.colour}/>
                    ))}
                </table>
            </article>
        </div>
    )
}

export async function getStaticProps(context) {
    const res = await fetch(`https://necro-funda-default-rtdb.firebaseio.com/standings.json`);
    const standings = await res.json();
    const standingData = Object.values(standings);

    if (!standingData) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            standingData
        }

    } // will be passed to the page component as props

}
