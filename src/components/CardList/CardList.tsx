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
        async function fetchData() {
            const response = await fetch('http://test-backend.itdelta.agency/api/images')
            const data = await response.json();
            setData(data);            
        }
        fetchData();
    }, []);

    const handleClickOpen = (card: CardListI) => {
        setSelectedCard(card);
        console.log(1)
    }

    const handleClickClose = () => {
        setSelectedCard(null);
        console.log(2)
    }

    
    return (
        <div className="card-item">
            {data.map((item) => (
                 <CardItem key={item.id} id={item.id} image={item.image} onClick={() => handleClickOpen(item)}/>
            ))}
            {selectedCard && (
                <CardModal id={selectedCard.id} image={selectedCard.image} onClose={() => handleClickClose()}/>
            )}
        </div>
    )
}



