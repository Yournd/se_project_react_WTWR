import './ItemCard.css';

function ItemCard({ prop }) {
  return (
    <li className="card" >
            <h2 className="card__title" >{prop.name}</h2>
            <img className="card__image" src={prop.link} alt={prop.name} />
          </li>
  )
}

export default ItemCard;