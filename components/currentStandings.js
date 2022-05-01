import React from 'react';



function CurrentStandings({name, dominator, slaughterer, warmonger, creditor,powerBroker}) {

    return (
        <>
            <tr className="odd:bg-blue-100">
                <td className={"py-4"}>{name}</td>
                <td className={"py-4"}>{dominator}</td>
                <td className={"py-4"}>{slaughterer}</td>
                <td className={"py-4"}>{creditor}</td>
                <td className={"py-4"}>{warmonger}</td>
                <td className={"py-4"}>{powerBroker}</td>
            </tr>
            </>
    );
}

export default CurrentStandings;