import React from 'react';
import useSound from 'use-sound';
import TitleScreen from "./TitleScreen";
import PaperSelectionScreen from './PaperSelectionScreen';
import PaperDetailScreen from './PaperDetailScreen';
import './App.scss';
import { Routes, Route } from "react-router-dom";
import ProjectSelectionScreen from './ProjectSelectionScreen';

const ActionContext = React.createContext<any>({});

const App = () => {
    const [playButtonSound] = useSound('/assets/click.webm');

    return <ActionContext.Provider value={{
        playButtonSound: playButtonSound,
    }}>
        <Routes>
            {/* <Route path="/projects/:paperid" element={<PaperDetailScreen />} /> */}
            <Route path="/projects" element={<ProjectSelectionScreen />} />
            <Route path="/papers/:paperid" element={<PaperDetailScreen />} />
            <Route path="/papers" element={<PaperSelectionScreen />} />
            <Route path="/" element={<TitleScreen />} />
        </Routes>
    </ActionContext.Provider>
}

export { App, ActionContext }