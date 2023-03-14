const Total = ({parts}) => {
    const count = parts.reduce((total, current) => total + current.exercises, 0)
    return (
        <p>Number of exercises {count}</p>
    )
}

export default Total
