const Statistics = ({good, neutral, bad}) => {
    const all = good + neutral + bad
    const average = (good - bad) / 9;
    const positive = good / all * 100;

    return (
        <div>
            <h1>statistics</h1>
            {
                (all === 0)
                ? (<div>No feedback given</div>)
                : (
                    <div>
                        <div>good {good}</div>
                        <div>neutral {neutral}</div>
                        <div>bad {bad}</div>
                        <div>all {all}</div>
                        <div>average {average}</div>
                        <div>positive {positive} %</div>
                    </div>
                )
            }
        </div>
    )
}

export default Statistics
