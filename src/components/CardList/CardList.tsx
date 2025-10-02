import { useEffect, useState } from "react";
import CardItem from "../CardItem/CardItem";
import CardModal from "../ModalCard/ModalCard";
import './CardList.css'


interface CardListI {
    id: number
    image: string
}

export function CardList() {
    const [data, setData] = useState<CardListI[]>([])
    const [selectedCard, setSelectedCard] = useState<CardListI | null>(null)

    useEffect(() => {
        function fetchData() {        
            const controller = new AbortController();
            const signal = controller.signal;

            fetch('http://test-backend.itdelta.agency/api/images', { signal })
            .then(res => res.json())
            .then(data => setData(data))
            return () => {
                controller.abort()
            }
        }
        fetchData();
    }, []);

    const handleClickOpen = (card: CardListI) => {
        setSelectedCard(card);
    }

    const handleClickClose = () => {
        setSelectedCard(null);
    }

    
    return (
        <div className="card-item">
            {data.map((item) => (
                 <CardItem key={item.id} id={item.id} image={item.image} onClick={() => handleClickOpen(item)}/>
            ))}
            {selectedCard && (
                <CardModal id={selectedCard.id} onClick={() => handleClickClose()}/>
            )}
        </div>
    )
}



