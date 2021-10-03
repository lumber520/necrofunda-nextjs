import React from 'react';
import Link from "next/link";
import {AiFillHome} from 'react-icons/ai';
import {GiBattleGear} from 'react-icons/gi';
import {GiDwarfFace} from 'react-icons/gi';
import {GiWantedReward} from 'react-icons/gi';
import Image from 'next/image';

function NavBar(props) {
    return (
        <nav className='sticky top-0 bg-white bg-opacity-100 z-50'>
            <div className='flex justify-between'>
                <article className='p-8'>
                    <Link href="/">
                    <Image src='/logo.png' width={132} height={50}/>
                    </Link>
                </article>
                <section className='inline-grid grid-cols-5 justify-items-end grid-flow-col text-center gap-4 p-8'>
                    <Link href="/">
                        <a><AiFillHome className='m-auto fill-current text-green-600 text-xl mb-3' /> Home</a>
                    </Link>
                    <Link href="/gangs">
                        <a><GiDwarfFace className='m-auto fill-current text-green-600 text-xl mb-3' />Gangs</a>
                    </Link>
                    <Link href="/games">
                        <a><GiBattleGear className='m-auto fill-current text-green-600 text-xl mb-3'/> Matches</a>
                    </Link>
                    <Link href="/mostwanted">
                        <a><GiWantedReward className='m-auto fill-current text-green-600 text-xl mb-3' /> Most Wanted</a>
                    </Link>
                </section>
            </div>
        </nav>
    );
}

export default NavBar;