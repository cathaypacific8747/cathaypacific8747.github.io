import Button from './components/Button'
import './TitleScreen.scss'

const TitleScreen = () => {
    return <div className="title-screen">
        <Button text="Projects (WIP)" disabled={true} />
        <Button text="Papers" goto="papers" />
        <Button text="Blog (WIP)" disabled={true} />
    </div>
}

export default TitleScreen;