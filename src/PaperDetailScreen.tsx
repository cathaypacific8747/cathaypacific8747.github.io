import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import PaperDetail from './paperDetail.d'
import Button from './components/Button'
import './PaperDetailScreen.scss'


const Link = ({display, url, small}: {display: string, url: string, small: boolean}) => url ? <div className={`${small ? 'small' : 'big'} link`}>
    <a href={url} target="_blank" rel="noreferrer">{display}</a><div></div>
</div> : <>{display}</>

const PaperDetailScreen = () => {
    let { paperid } = useParams();
    const [paperDetail, setPaperDetail] = useState<PaperDetail | null | undefined>(undefined);

    useEffect(() => {
        axios.get(`/assets/gui/definitions/papers/${paperid}.json`).then(({ data }) => {
            setPaperDetail(data);
        }).catch(() => setPaperDetail(null));
        // handle error
    }, []);

    return paperDetail === undefined ? <div className="paper-detail-screen loading">
        <div className="header">Loading...</div>
        <div className="detail"></div>
        <div className="footer">
            <Button text="Go Back" goto="/papers" />
        </div>
    </div> : paperDetail === null ? <div className="paper-detail-screen not-found">
        <div>Hmm... this paper either does not exist or have been removed.</div>
        <Button text="Go Back" goto="/papers" />
    </div> : <div className="paper-detail-screen success">
        <div className="header">
            <div className="title">{paperDetail.title}</div>
            <div className="authors">
                {paperDetail.authors.length > 1 ? "Authors: " : "Author: "}
                {paperDetail.authors.map(({name, url}, i) => [
                    i > 0 && ", ",
                    <Link key={i} display={name} url={url} small={true} />
                ])}
            </div>
            <div className="published">Published: {paperDetail.published}</div>
            {paperDetail.doi && <div className="doi">doi: <Link display={paperDetail.doi} url={`https://doi.org/${paperDetail.doi}`} small={true} /></div>}
        </div>
        <div className="detail">
            <div className="pane-1">
                <div className="heading">Abstract</div>
                <div className="abstract">{paperDetail.abstract}</div>
                {paperDetail.information && <>
                    <div className="heading pad">Information</div>
                    {paperDetail.information.split('\n').map(line => <div className="information">{line}</div>)}
                </>}
            </div>
            <div className="pane-2">
                <div className="heading">Downloads</div>
                <div className="license">License: <Link display={paperDetail.license.name} url={paperDetail.license.url} small={false} /></div>
            </div>
        </div>
        <div className="footer">
            <Button text="Go Back" goto="/papers" />
        </div>
    </div>
}

export default PaperDetailScreen;