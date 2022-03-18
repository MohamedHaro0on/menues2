import data from "./data";

const Menue = ({ cat }) => {
  const menueList =
    cat === "all" ? data : data.filter((element) => element.category === cat);
  return (
    <ul className="menueList">
      {menueList.map(({ category, id, img, desc, price, title }) => {
        return (
          <li key={id} className="menueItem">
            <div className="imageContainer">
              <img src={img} alt={title} />
            </div>
            <div className = "infoContainer">
                <h2> 
                    <span className = "title">{title}</span>
                    <span className = "price">{`$ ${price}`}</span>
                </h2>
                <p>{desc}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Menue;
