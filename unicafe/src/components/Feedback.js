import Button from './Button'

const Feedback = ({incrementGood, incrementNeutral, incrementBad}) => {
    return (
        <div>
            <h1>give feedback</h1>
            <div>
                <Button value={"good"} handleClick={incrementGood} />
                <Button value={"neutral"} handleClick={incrementNeutral} />
                <Button value={"bad"} handleClick={incrementBad} />
            </div>
        </div>
    )
}

export default Feedback
