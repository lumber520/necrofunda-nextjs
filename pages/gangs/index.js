import React from 'react';
import GangBio from "../../components/gangBio";
import VoxNews from "../voxnews";
//import data from '../data/data'
function Index({gangsList}) {
    return (
        <>
            <section  className='mb-4 bg-meteor bg-cover bg-no-repeat'>
            {gangsList.map((gang) => (
           <GangBio key={gang.id} imgSrc={gang.imgSrc} bio={gang.description} name={gang.title} imgOrder={gang.orderImg}/>
                ))}
            </section>
            </>
    );
}

export default Index;

export async function getStaticProps({params}) {
    const res = await fetch(`https://necro-funda-default-rtdb.firebaseio.com/gangs.json`);
    const gangs = await res.json();
    const gangsList = await Object.values(gangs);
    if (!gangsList) {
        return {
            notFound: true,
        }
    }

    return {
        props: {gangsList},
        revalidate: 6000,// will be passed to the page component as props
    }
}