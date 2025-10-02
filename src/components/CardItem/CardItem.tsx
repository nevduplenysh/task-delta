import './CardItem.css'

interface CardItemProps {
    id: number
    image: string
    onClick:() => void;
}

const CardItem = (props: CardItemProps) => (
    <div className="card-container" onClick={props.onClick}>
        <div className="card-image-container">
            <img
                className="card-image"
                src={props.image}
                alt={`${props.id}`}              
            />
        </div>
        <p className="card-text">id: {props.id}</p>
    </div>
)

export default CardItem