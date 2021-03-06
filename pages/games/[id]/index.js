import React from 'react';
import FullDetailsBlock from '/components/fullReportDetailsPage'


function Index({match}) {
    return (
        <>
        <article className='bg-primary-blue h-screen bg-hexagon h-screen bg-cover bg-no-repeat pt-4'>
            <FullDetailsBlock descr={match.description} imgSrc={match.imgSrc}/>
        </article>
        </>
    );
}

export default Index;

export async function getStaticProps({params}) {
    const res = await fetch(`https://necro-funda-default-rtdb.firebaseio.com/games/${[params.id]}.json`);
    const match = await res.json();
    if (!match) {
        return {
            notFound: true,
        }
    }

    return {
        props: {match},
        revalidate: 1800,// will be passed to the page component as props
    }
}

export async function getStaticPaths() {
    const res = await fetch(`https://necro-funda-default-rtdb.firebaseio.com/games/.json`);
    const games = await res.json();
    const numberOfMatches = Object.values(games);
    const paths = numberOfMatches.map((games) => ({
        params: {id: games.id.toString()},
    }));

    return {
        paths, fallback: false
    }

}

