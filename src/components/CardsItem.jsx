import { Link } from "react-router-dom";

export default function CardsItem() {
  return (
    <li className="cards-item">
      <Link to="/Project" className="cards-item-link">
        <img
          src={`${import.meta.env.BASE_URL}img/HOF.png`}
          alt="Holm Outdoor Fitness"
        />

        <p>HOLM OUTDOOR FITNESS</p>
      </Link>
      <Link to="/Project" className="cards-item-link">
        <img src="/img/IS.png" alt="STORYTELLING"></img>
        <p>INTERACTIVE STORYTELLING</p>
      </Link>
      <Link to="/Project" className="cards-item-link">
        <img src="/img/NIPPON.png" alt="NIPPON"></img>
        <p>NIPPON</p>
      </Link>
      <Link to="/Project" className="cards-item-link">
        <img src="/img/MONK.png" alt="MONK"></img>
        <p>MONK</p>
      </Link>
    </li>
  );
}
