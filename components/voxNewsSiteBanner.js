import React from 'react';
import Link from 'next/link'

function VoxNewsSiteBanner(props) {
    return (
        <>
            <Link href="/voxnews">
                    <a>
                        <div className="md:bg-green-700 text-center py-4 lg:px-4 sticky top-20 md:top-24 cursor-pointer z-20">
                            <div
                                className="p-2 bg-green-500 items-center text-green-100 leading-none md:rounded-full flex md:inline-flex transform  hover:scale-110 ease-in duration-700"
                            >
                    <span
                        className="flex rounded-full bg-green-400 uppercase px-2 py-1 text-xs mr-3">Vox News</span>
                                <span className=" mr-2 text-left flex-auto">Get the latest news from the campaign</span>
                                <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path
                                        d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/>
                                </svg>
                            </div>
                        </div>
                    </a>
            </Link>
        </>
    );
}

export default VoxNewsSiteBanner;