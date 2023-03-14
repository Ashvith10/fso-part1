import {useState} from 'react'
import Feedback from './components/Feedback'
import Statistics from './components/Statistics'

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
   
    const incrementGood = () => setGood(prevState => prevState + 1)
    const incrementNeutral = () => setNeutral(prevState => prevState + 1)
    const incrementBad = () => setBad(prevState => prevState + 1)

    return (
        <div>
            <Feedback incrementGood={incrementGood} incrementNeutral={incrementNeutral} incrementBad={incrementBad} />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    );
}

export default App;
