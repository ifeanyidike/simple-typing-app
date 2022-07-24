import {ResultContainer} from '../styles/ResultStyles'
import {Button} from '../styles/HomeStyles'
import { MdOutlineCelebration } from 'react-icons/md'

const Result = ({result, setResult, theme}) => {
  return (
    <ResultContainer theme={theme}>
        <div className="content">
            <h2 className="greetings">Congratulations <MdOutlineCelebration /></h2>
            <address>
                <p className="intro"> You have completed your typing test</p>
                <p className="speedMessage">Your typing speed is <output>{(result.speed).toFixed(2)} wpm</output> (words per minute)</p>
                <p className="accuracyMessage">Your typing accuracy is <output>{result.accuracy} %</output> </p>
            </address>
            <Button theme={theme} onClick={() => setResult(null)}>Play Again</Button>
        </div>
    </ResultContainer>
  )
}

export default Result