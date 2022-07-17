import React, { useContext } from 'react';

import { ActionContext } from '../App'
import './DownloadCard.scss'

interface DownloadCardSettings {
    display: string;
    lastModified: string;
    src: string;
}

const DownloadCard: React.FC<DownloadCardSettings> = ({ display, lastModified, src }) => {
    const { playButtonSound } = useContext(ActionContext)

    return <div className={`card${selected ? ' selected' : ''}`} onClick={dispatchSelected}>
        <div className="thumb" onClick={handleNavigate}>
            <div className="hover"></div>
            <div className="base" style={thumbPath ? {backgroundImage: `url(${thumbPath})`} : {}}></div>
        </div>
        <div className="text">
            <div className="title">{title}</div>
            <div className="subtitle">{subtitle}</div>
        </div>
    </div>
}

export default DownloadCard;