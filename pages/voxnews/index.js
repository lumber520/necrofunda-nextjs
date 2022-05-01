import React from 'react';
import dynamic from "next/dynamic";
const LatestNews = dynamic(() => import("../../components/lastestNews"));
function voxNews({newsData}) {

    return (
        <>
            <LatestNews  newsitems={newsData}/>


        </>
    );
}


export async function getStaticProps(context) {
    const res = await fetch(`https://necro-funda-default-rtdb.firebaseio.com/vox.json`);
    const latestNews = await res.json();
    const newsData =  Object.values(latestNews);
    if (!newsData) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            newsData
        },
        revalidate: 120,

    }
}
export default voxNews;