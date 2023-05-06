import { useEffect, useState, useRef } from 'react'
import axios from 'axios';

import Card from './components/Card'
import Button from './components/Button'
import './ProjectSelectionScreen.scss'

interface Project {
    id: string,
    title: string,
    description: string,
    thumbPath?: string,
}

const ProjectSelectionScreen = () => {
    const [projects, setProjects] = useState<Project[]>([])
    const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
    const selectionEl = useRef(null);

    useEffect(() => {
        axios.get('/definitions/projects/index.json').then(({ data }) => {
            setProjects(data);
        });
    }, []);

    return <div className="projects-screen">
        <div className="pr-heading">Select Project</div>
        <div className="pr-selection" ref={selectionEl} onClick={e => e.target === selectionEl.current && setSelectedProjectId(null)}>
            {projects.map(p => <Card
                key={p.id}
                title={p.title}
                subtitle={p.description}
                thumbPath={p?.thumbPath}
                selected={p.id === selectedProjectId}
                dispatchSelected={() => setSelectedProjectId(p.id)}
                goto={`/projects/${p.id}`}
            />)}
        </div>
        <div className="pr-footer">
            <Button
                text="View Selected Project"
                goto={selectedProjectId || undefined}
                disabled={selectedProjectId === null}
            />
            <div className="pr-footer1">
                <Button
                    text="Copy Link"
                    half={true}
                    disabled={selectedProjectId === null}
                    handleClickAfter={() => {navigator.clipboard.writeText(`${window.location.href}/${selectedProjectId}`)}}
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

export default ProjectSelectionScreen;