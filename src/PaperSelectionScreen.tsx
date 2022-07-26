import { useEffect, useState, useRef } from 'react'
import axios from 'axios';

import Paper from './paper.d';
import Card from './components/Card'
import Button from './components/Button'
import './PaperSelectionScreen.scss'

const PaperSelectionScreen = () => {
    const [papers, setPapers] = useState<Paper[]>([])
    const [selectedPaperId, setSelectedPaperId] = useState<string | null>(null);
    const selectionEl = useRef(null);

    useEffect(() => {
        axios.get('/definitions/papers/index.json').then(({ data }) => {
            setPapers(data)
        });
    }, []);

    return <div className="papers-screen">
        <div className="ps-heading">Select Paper</div>
        <div className="ps-selection" ref={selectionEl} onClick={e => e.target === selectionEl.current && setSelectedPaperId(null)}>
            {papers.map(p => <Card
                key={p.id}
                title={p.title}
                subtitle={p.description}
                thumbPath={p?.thumbPath}
                selected={p.id === selectedPaperId}
                dispatchSelected={() => setSelectedPaperId(p.id)}
                goto={`/papers/${p.id}`}
            />)}
        </div>
        <div className="ps-footer">
            <Button
                text="View Selected Paper"
                goto={selectedPaperId || undefined}
                disabled={selectedPaperId === null}
            />
            <div className="ps-footer1">
                <Button
                    text="Copy Link"
                    half={true}
                    disabled={selectedPaperId === null}
                    handleClickAfter={() => {navigator.clipboard.writeText(`${window.location.href}/${selectedPaperId}`)}}
                />
                <Button
                    text="Go Back"
                    goto="/"
                    half={true}
                />
            </div>
        </div>
    </div>
}

export default PaperSelectionScreen;