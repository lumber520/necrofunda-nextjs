import React from 'react';


function CurrentStandings({name, dominator, powerBroker, slaughterer, warmonger, creditor, bgColour}) {
    return (
        <>
            <tbody>
            <tr>
                <td className={bgColour}>{name}</td>
                <td className={bgColour}>{dominator}</td>
                <td className={bgColour}>{powerBroker}</td>
                <td className={bgColour}>{creditor}</td>
                <td className={bgColour}>{slaughterer}</td>
                <td className={bgColour}>{warmonger}</td>
            </tr>
            </tbody>

            </>
    );
}

export default CurrentStandings;