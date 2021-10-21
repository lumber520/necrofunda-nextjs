import React from 'react';
import Image from "next/image";
import Link from "next/link";

function gameReports({intro, imgSrc, battleName, url}) {
    return (
        <>
            <Link classNameName='cursor-pointer' href={`games/${url}`} key={url} passHref>
                <a>
                    <div className="game-border-img w-full lg:max-w-full lg:flex shadow-lg">
                        <div
                            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-center text-center overflow-hidden gamesbg"
                            title="Game played">
                            <style jsx>{`
        .gamesbg {
          background: url( ${imgSrc});
        }
      `}</style>
                        </div>
                        <div
                            className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div className="mb-8">

                                <div className="text-gray-900 font-bold text-xl mb-2">{battleName}</div>
                                <p className="text-gray-700 text-base">{intro}</p>
                                <p className="text-sm text-gray-600 flex items-center">
                                    Read More
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </>
    );
}

export default gameReports;