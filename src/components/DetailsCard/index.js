export default function DetailsCard(props) {
  return (
    <div>
      <div>
        <div>
          <img src={props.img} />
          <img src={props.img} />
          <img src={props.img} />
        </div>
        <div>
          <img src={props.img} />
          <h3>{props.name}</h3>
          <button>{props.rating}</button>
          <h2>{props.price}</h2>
          <div></div>
          <button>Add to Cart</button>
          <button>Favorite</button>
        </div>
        <p>Categories: {props.categorie}</p>
      </div>
      <p>{props.description}</p>
    </div>
  );
}
