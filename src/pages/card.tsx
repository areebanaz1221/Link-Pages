const Card = () => {
    let message: string = "my first arrow function with component"
    return (
        <div>
            <h2>{message}</h2>
        </div>
    )
};

// Next.js Component

export const Card2 = () => {
    let message: string = "my second arrow function with function component"
    return (
        <div>
            <h4>{message}</h4>
        </div>
    )
}

export default Card;