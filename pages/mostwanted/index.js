import React from 'react';
import Image from "next/image";
import MostWanted from "../../components/mostWanted";
import VoxNews from "../voxnews";

function Index({mostWantedList}) {
    return (
        <>
                <MostWanted className='animate-fade-in-down ' imgScr={mostWantedList}/>
        </>

    );
}

export default Index;

export async function getStaticProps() {
    const res = await fetch(`https://necro-funda-default-rtdb.firebaseio.com/wanted.json`);
    const mostWanted = await res.json();
    const mostWantedList = await Object.values(mostWanted);
    if (!mostWantedList) {
        return {
            notFound: true,
        }
    }

    return {
        props: {mostWantedList},
        revalidate: 1000,// will be passed to the page component as props
    }
}