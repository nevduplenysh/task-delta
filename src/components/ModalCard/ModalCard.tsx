import './ModalCard.css'

interface CardModalProps {
    id: number
    image: string
    onClick: () => void
}

const CardModal = (props: CardModalProps) => (
    <div className="modal-overlay" onClick={(e) => {
            if (e.target === e.currentTarget) props.onClick()
    }}>
        <div className="madal-content">
            <div className="modal-card-image-container">
                <img
                className="card-image"
                src={props.image}
                alt={`${props.id}`}
                />
            </div>
            <div className="comment-container">
                <label htmlFor="comment-form" className="comment-label">Comment</label>
                <textarea id="comment-form" className="comment-textarea" >
                </textarea>
                <p className='comment-form-text'>Write a few sentences about the photo.</p>
            </div>
            <div>
                <button type='submit' className='form-button'>
                    Save
                </button>
            </div>
        </div>
    </div>
)

export default CardModal