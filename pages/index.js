import Head from 'next/head'
import React from "react";
import CurrentStandings from "../components/currentStandings";
import {useState} from "react";
import Image from "next/image";
export default function Home({standingData}) {
    const [isActive, setActive] = useState("false");

    const ToggleClassMap = () => {
        setActive(!isActive);
    };
    const [data, setData] = useState(standingData);
    const [order, setOrder] = useState("ASC");
    const sorting = (col) =>{
        if (order === "ASC"){
            const  sorted = data.sort((a,b)=>
                a[col].toString() > b[col].toString() ? 1: -1
            );
            setData(sorted);
            setOrder("DSC")
        }
        if (order === "DSC"){
            const  sorted = data.sort((a,b)=>
                a[col].toString() < b[col].toString() ? 1: -1
            );
            setData(sorted);
            setOrder("ASC")
        }
    };
    return (
        <div className='pb-4 mx-auto'>
            <Head>
                <title> Necro-Funda</title>
            </Head>
            <article
                className='grid mx-auto items-center  animate-fade-in-down pt-5 mx-0'>
              <img  onClick={ToggleClassMap} className={(isActive ? "lg:max-w-screen-md xl:max-w-screen-lg " : "max-w-full") +  " min-w-0 block m-auto cursor-pointer drop-shadow-2xl" } src='/map_necromunda_map_start.png' alt='Map'
                      />
            </article>

            <article className='lg:container mx-auto mt-4 md:px-4'>
                <h2 className='py-3 text-2xl hover:underline delay-300 text-center md:text-left'>Current Standings</h2>
                <table
                    className='table-fixed md:container block lg:table overflow-auto whitespace-nowrap text-center border-4 border-indigo-800 shadow-lg items-center min-w-full'>
                    <thead>
                    <tr className='bg-indigo-800 text-white cursor-pointer'>
                        <th onClick={()=>sorting("name")} className='w-1/4 py-4 sm:border-r-3 sm:border-gray-600 px-2'>Team</th>
                        <th onClick={()=>sorting("dominator")} className='w-1/3 sm:border-r-3 sm:border-gray-600 px-2'>Dominator</th>
                        <th onClick={()=>sorting("slaughterer")} className='w-1/3 sm:border-r-3 sm:border-gray-800 px-2'>Slaughterer</th>
                        <th onClick={()=>sorting("creditor")} className='w-1/3 sm:border-r-3 sm:border-gray-600 px-2'>Creditor</th>
                        <th onClick={()=>sorting("warmonger")} className='w-1/3 sm:border-r-3 sm:border-gray-600 px-2'>Warmonger</th>
                        <th onClick={()=>sorting("powerBroker")} className='w-1/3 border-r-3 border-gray-600 px-2'>Power Broker</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((standings) => (
                        <CurrentStandings  key={standings.id} name={standings.name} dominator={standings.dominator}
                                          slaughterer={standings.slaughterer} creditor={standings.creditor} warmonger={standings.warmonger}
                                            powerBroker={standings.powerBroker} />
                    ))}
                    </tbody>
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
