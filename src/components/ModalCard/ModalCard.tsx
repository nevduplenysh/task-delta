

interface CardModalProps {
    id: number
    image: string
    onClose: () => void
}

const CardModal = (props: CardModalProps) => (
    <div className="modal-overlay" onClick={props.onClose}>
        <img
            className="card-image"
            src={props.image}
            alt={`${props.id}`}
            
        />
        <p className="card-text">id: {props.id}</p>
    </div>
)

export default CardModal