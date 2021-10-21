import React from 'react';
import GameReports from "../../components/gameReports";
import VoxNews from "../voxnews";

//import {useRouter} from "next/router";
function gameListingsIndex({gameListings}) {
    // const router = useRouter();
    // console.log(router.asPath);
    return (
        <>
            <section className='bg-curve-line bg-no-repeat bg-cover min-h-screen'>
                <article
                    className='p-2 md:p-10  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5 animate-slide-in-left relative z-10'>

                    {gameListings.map((match) => (
                        <GameReports className='animate-slide-in-left' key={match.id} intro={match.intro}
                                     imgSrc={match.imgSrc} battleName={match.name}
                                     url={match.id}/>
                    ))}

                </article>
            </section>
        </>
    );
}

export default gameListingsIndex;

export async function getStaticProps(context) {
    const res = await fetch(`https://necro-funda-default-rtdb.firebaseio.com/games.json`);
    const game = await res.json();
    const gameListings = Object.values(game);
    if (!gameListings) {
        return {
            notFound: true
        }
    }

    return {
        props: {gameListings},
        revalidate: 1800,

    } // will be passed to the page component as props

}