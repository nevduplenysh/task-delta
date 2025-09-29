import './CardItem.css'

interface CardItemProps {
    id: number
    image: string
    onClick:() => void;
}

const CardItem = (props: CardItemProps) => (
    <div className="card-container" onClick={props.onClick}>
        <img
            className="card-image"
            src={props.image}
            alt={`${props.id}`}
            
        />
        <p className="card-text">id: {props.id}</p>
    </div>
)

export default CardItem