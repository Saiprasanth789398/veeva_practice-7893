import React , {useState} from "react";
import { mobileData } from "../data/mobiles";
import "../App.css";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

const Mobilepage = ({search}) => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companies = [...new Set(mobileData.map((item) => item.company))];

  const companyHandler = (company) => {
    if (selectedProduct.includes(company)) {
      setSelectedProduct(
        selectedProduct.filter((item) => item !== company)
      );
    } else {
      setSelectedProduct([...selectedProduct, company]);
    }
  };
5

  const filteredMobiles = mobileData.filter((mobile) => {

  const searchText = search.toLowerCase();

  const matchesSearch =
    mobile.product.toLowerCase().includes(searchText) ||
    mobile.company.toLowerCase().includes(searchText) ||
    mobile.model.toLowerCase().includes(searchText) ||
    mobile.price.toString().includes(searchText) ||
    mobile.category.toLowerCase().includes(searchText) ||
    mobile.description.toLowerCase().includes(searchText);

  const matchesCompany =
    selectedProduct.length === 0 ||
    selectedProduct.includes(mobile.company);

  return matchesSearch && matchesCompany;
});

  return (
    <>
        <div className="full-page">
            
      {/* Company Filter */}
      <div className="pro-selected">
        {companies.map((company) => (
          <div key={company}>
            <label className="checkbox-label">
              <input

                type="checkbox"
                // checked={selectedProduct.includes(company)}
                onChange={() =>  companyHandler(company)}
              />
              {company}
            </label>
          </div>
        ))}
      </div>

      {/* Mobiles */}
      <div className="pagesection">
        {filteredMobiles.map((mobile) => (
          <div className="mobile-item" key={mobile.id}>
            <Link
              to={`/Mobilepage/${mobile.id}`}
              className="custom-link"
            >
              <div className="mobileimg">
                <img src={mobile.image} alt={mobile.model} />
              </div>
            </Link>

            <div className="mobileinfo">
              <h2>{mobile.model}</h2>

              <h3 className="price">${mobile.price}</h3>

              <button className="buybtn">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
        </div>
    </>
  );
};

export default Mobilepage;