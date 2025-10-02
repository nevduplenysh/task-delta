import { useEffect, useState } from 'react'
import './ModalCard.css'

interface Comment {
    id: number 
    author: string
    text: string
}

interface ImageData {
    id: number
    image: string
    largeImage: string
    comments: Comment[]
}

interface CardModalProps {
    id: number
    onClick: () => void
}

const CardModal = (props: CardModalProps) => {
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState<Comment[]>([])
    const [largeImage, setLargeImage] = useState('')

    useEffect(() => {
         fetch(`http://test-backend.itdelta.agency/api/image/${props.id}`)
         .then(res => res.json())
         .then((data: ImageData) => {
            setComments(data.comments || [])
            setLargeImage(data.largeImage)
         })

    }, [props.id])

    const handleSubmit = () => {
        if (!comment.trim()) {
            alert('КОММЕНТАРИЙ НЕ МОЖЕТ БЫТЬ ПУСТЫМ')
            return
        }

        const dataToSend = {
            comment: comment
        }

        fetch(`http://test-backend.itdelta.agency/api/image/${props.id}/comments`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        })
        
        .then(res => {
            if (res.status === 204) {
                console.log("OK")
                setComment('')
            }
        })

        .catch(error => console.log('Ошибка:', error))

    }

    return(
        <div className="modal-overlay" onClick={(e) => {
                if (e.target === e.currentTarget) props.onClick()
        }}>
            <div className="madal-content">
                <div className="modal-card-image-container">
                    <img
                    className="card-image"
                    src={largeImage}
                    alt={`${props.id}`}
                    />
                </div>

                <div className="comment-container">
                    <label htmlFor="comment-form" className="comment-label">Comment</label>
                    <textarea 
                        id="comment-form" 
                        className="comment-textarea" 
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <p className='comment-form-text'>Write a few sentences about the photo.</p>
                </div>

                <div>
                    <button 
                        type='submit' 
                        className='form-button'
                        onClick={handleSubmit}>
                        Save
                    </button>
                </div>

                <div className="comments-list">
                    <p className='comment'>Комментарии:</p>
                    {comments.length > 0 ? (
                        comments.map(comment => (
                            <div key={comment.id} className="comment-item">
                                <span>{comment.author}: {comment.text}</span> 
                            </div>
                        ))
                    ) : (
                        <p className='comment-item'>Нет комментариев</p>
                    )}
                </div>
            </div>
        </div>
    )
} 

export default CardModal