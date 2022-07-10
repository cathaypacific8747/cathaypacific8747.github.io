import { useEffect, useState, useRef } from 'react'
import axios from 'axios';

import Button from './components/Button'
import Card from './components/Card'
import './PapersScreen.scss'

interface Paper {
    id: string,
    title: string,
    description: string,
}

const PapersScreen = () => {
    const [papers, setPapers] = useState<Paper[]>([])
    const [selectedPaperId, setSelectedPaperId] = useState<string | null>(null);
    const selectionEl = useRef(null);

    useEffect(() => {
        axios.get('/assets/gui/definitions/papers.json').then(({ data }) => {
            setPapers(data)
        });
        // WIP - handle errors
    }, []);

    return <div className="papers-screen">
        <div>Select Paper</div>
        <div className="selection" ref={selectionEl} onClick={e => e.target === selectionEl.current && setSelectedPaperId(null)}>
            {papers.map(p => <Card
                title={p.title}
                subtitle={p.description}
                dispatchSelected={() => setSelectedPaperId(p.id)}
                selected={p.id === selectedPaperId}
            />)}
        </div>
        <Button text="Cancel" goto="/" />
    </div>
}

export default PapersScreen;