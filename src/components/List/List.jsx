import { Context } from "../../context/context";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";

const List = () => {
    const { cards, setCards } = Context()

    const deleteCard = (title) => {
        setCards(cards.filter((obj) => obj.title !== title))
    }

    return (
        <div className="tasks">
            {cards.map((card, index) => {
                return (
                    <Card
                        key={index}
                        title={card.title}
                        description={card.description}>
                    </Card>
                )
            })}
        </div>
    )
}

export default List;