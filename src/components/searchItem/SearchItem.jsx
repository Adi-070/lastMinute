import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://www.discoverasr.com/content/dam/tal/media/images/properties/singapore/singapore/citadines-raffles-place-singapore/overview/citadines-raffles-place-singapore-living-rm-750x600.jpg.transform/ascott-lowres/image.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Citadines Raffles Place</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
        Four subcategories of Studio, One-Bedroom, Two-Bedroom and Loft. 
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 20m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$110</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;