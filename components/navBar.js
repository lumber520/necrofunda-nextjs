import React, {useState} from 'react';
import Link from "next/link";
import {useRouter} from 'next/router'
import {AiFillHome} from 'react-icons/ai';
import {GiBattleGear, GiDwarfFace, GiWantedReward, GiHamburgerMenu} from 'react-icons/gi';
import {FaRegWindowClose} from 'react-icons/fa'
import Image from 'next/image';

export default function Navbar({fixed}) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const router = useRouter();
    const menu = [
        '/',
        '/gangs',
        '/games',
        '/mostwanted'

    ];
    const highlightMenuClass = 'text-green-600';
    function closeMenu()  {
        setNavbarOpen(!navbarOpen)
    };
    return (
        <>
            <nav
                className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3 sticky top-0 z-30">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
                        <Link href="/">
                            <a><Image className='cursor-pointer' src='/logo-gangs.png' width={30} height={30}/><span
                                className='text-2xl'>NecroFunda</span><p className='text-2xl'>Dominion Campaign</p></a>
                        </Link>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={closeMenu}
                        >
                            {
                                (
                                    navbarOpen ?
                                        <FaRegWindowClose
                                            className='m-auto fill-current text-red-500 font-lg text-2xl mb-3'/>
                                        :
                                        <GiHamburgerMenu
                                            className='m-auto fill-current text-green-600 font-lg text-2xl mb-3'/>
                                )
                            }
                        </button>
                    </div>
                    <div
                        className={
                            `md:flex flex-grow items-center mt-4 lg:mt-0 ${(navbarOpen ? "" : " hidden")}`
                        }
                        id="example-navbar-danger"
                    >
                        <ul  className="flex flex-col md:flex-row list-none md:ml-auto space-y-3 md:space-x-6 md:space-y-0">
                            <li>
                                <Link href="/"   >
                                    <a  onClick={closeMenu} className={`inline-flex md:flex-none md:grid md:justify-items-center pl-2 md:pl-0 ${(router.pathname !== menu[0] ? "" : `${highlightMenuClass}`)}`}><AiFillHome
                                        className='fill-current text-xl md:mb-3 mr-2 md:mr-0'/> Home</a>
                                </Link>
                            </li>
                            <li className="flex-inline md:flex-none">
                                <Link href="/gangs">
                                    <a  onClick={closeMenu} className={`inline-flex md:flex-none md:grid md:justify-items-center pl-2 md:pl-0 ${(router.pathname !== menu[1] ? "" : `${highlightMenuClass}`)}`}><GiDwarfFace
                                        className='fill-current text-xl md:mb-3 mr-2 md:mr-0'/>Gangs</a>
                                </Link>
                            </li>
                            <li className="flex-inline md:flex-none">
                                <Link
                                    href={{
                                        pathname: '/games',
                                        query: '/games'
                                    }}
                                >
                                    <a  onClick={closeMenu} className={`inline-flex md:flex-none md:grid md:justify-items-center pl-2 md:pl-0 ${(router.pathname !== menu[2] ? "" : `${highlightMenuClass}`)}`}><GiBattleGear
                                        className={`fill-current text-xl md:mb-3 mr-2 md:mr-0`}/> Matches</a>
                                </Link>
                            </li>
                            <li className="flex-inline md:flex-none">
                                <Link  onClick={closeMenu} href="/mostwanted">
                                    <a className={`inline-flex md:flex-none md:grid md:justify-items-center pl-2 md:pl-0 ${(router.pathname !== menu[3] ? "" : `${highlightMenuClass}`)}`}><GiWantedReward
                                        className='fill-current text-xl md:mb-3 mr-2 md:mr-0'/> Most
                                        Wanted</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}