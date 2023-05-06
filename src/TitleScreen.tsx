import Button from './components/Button'
import './TitleScreen.scss'

const TitleScreen = () => {
    return <div className="title-screen">
        <Button text="Projects" goto="projects" />
        <Button text="Papers" goto="papers" />
        <Button text="About Me" disabled={true} />
    </div>
}

export default TitleScreen;