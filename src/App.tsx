import React, { useState } from 'react';
import useSound from 'use-sound';
import TitleScreen from "./TitleScreen";
import PapersScreen from './PapersScreen';
import './App.scss'

const ActionContext = React.createContext<any>({});

const App = () => {
    const [playButtonSound] = useSound('assets/gui/click.webm');
    const [page, setPage] = useState('title')

    return <ActionContext.Provider value={{
        playButtonSound: playButtonSound,
        setPage: setPage,
    }}>
        {
            page === 'title' ? <TitleScreen /> :
            page === 'papers' ? <PapersScreen /> : <></>
        }
    </ActionContext.Provider>
}

export { App, ActionContext }