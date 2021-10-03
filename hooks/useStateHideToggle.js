import {React, useState} from 'react';
function hideShowDiv(props) {
    const [showMe, setShowMe] = useState(false);
    const showHide = () => setShowMe(!showMe);

}

export default hideShowDiv;