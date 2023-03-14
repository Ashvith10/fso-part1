import StatisticLine from './StatisticLine'

const Statistics = ({good, neutral, bad}) => {
    const all = good + neutral + bad
    const average = (good - bad) / 9;
    const positive = good * 100 / all;

    return (
        <div>
            <h1>statistics</h1>
            {
                (all === 0)
                ? (<div>No feedback given</div>)
                : (
                    <div>
                        <StatisticLine text="good" value={good} />
                        <StatisticLine text="neutral" value={neutral} />
                        <StatisticLine text="bad" value={bad} />
                        <StatisticLine text="all" value={all} />
                        <StatisticLine text="average" value={average} />
                        <StatisticLine text="positive" value={`${positive} %`} />
                    </div>
                )
            }
        </div>
    )
}

export default Statistics
