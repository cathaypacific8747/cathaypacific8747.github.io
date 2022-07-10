import React from 'react';
import useSound from 'use-sound';
import TitleScreen from "./TitleScreen";
import PapersScreen from './PapersScreen';
import './App.scss';
import { Routes, Route } from "react-router-dom";

const ActionContext = React.createContext<any>({});

const App = () => {
    const [playButtonSound] = useSound('assets/gui/click.webm');

    return <ActionContext.Provider value={{
        playButtonSound: playButtonSound,
    }}>
        <Routes>
            <Route path="/papers" element={<PapersScreen />} />
            <Route path="/" element={<TitleScreen />} />
        </Routes>
    </ActionContext.Provider>
}

export { App, ActionContext }