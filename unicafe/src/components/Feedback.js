const Feedback = ({incrementGood, incrementNeutral, incrementBad}) => {
    return (
        <div>
            <h1>give feedback</h1>
            <input
                type="button"
                value="good"
                onClick={incrementGood}
            />
            <input
                type="button"
                value="neutral"
                onClick= {incrementNeutral}
            />
            <input
                type="button"
                value="bad"
                onClick={incrementBad}
            />
        </div>
    )
}

export default Feedback
