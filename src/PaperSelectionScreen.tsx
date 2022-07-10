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
        axios.get('/assets/gui/definitions/papers/index.json').then(({ data }) => {
            setPapers(data)
        });
    }, []);

    return <div className="papers-screen">
        <div>Select Paper</div>
        <div className="selection" ref={selectionEl} onClick={e => e.target === selectionEl.current && setSelectedPaperId(null)}>
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
        <Button text="Cancel" goto="/" />
    </div>
}

export default PaperSelectionScreen;