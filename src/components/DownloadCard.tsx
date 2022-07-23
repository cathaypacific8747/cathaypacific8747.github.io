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

    return <a href={src} download onClick={playButtonSound}>
        <div className="download-card">
            <div className="d-btn"></div>
            <div className="d-info">
                <div className="d-display">{display}</div>
                <div className="d-last-modified">{lastModified}</div>
            </div>
        </div>
    </a>

}

export default DownloadCard;