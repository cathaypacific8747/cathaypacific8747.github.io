import Button from './components/Button'
import './PapersScreen.scss'

const PapersScreen = () => {
    return <div className="papers-screen">
        <Button text="Go Back" goto="title"/>
    </div>
}

export default PapersScreen;