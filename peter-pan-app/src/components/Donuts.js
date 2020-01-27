import React from "react";

const Donuts = () => {
  return (
    <div className="donuts" id="donuts">
      <div className="image">
        <h1 className="section-header">DONUTS</h1>
      </div>
      <h2 className="baked-fresh">Baked Fresh Daily - Order Ahead Today!</h2>
      <p className="items">
        All Donuts <span className="price">$1.25</span> <br></br> 6{" "}
        <span className="price">$7.50</span>
        <br></br> 12 <span className="price">$13.99</span>{" "}
      </p>
      <div className="donuts-list-wrapper">
        <div className="donut-list">
          <h1>BEST SELLERS</h1>
          <ul>
            <li>Old Fashioned</li>
            <li>Glazed</li>
            <li>Red Velvet</li>
            <li>Blueberry</li>
            <li>Buttermilk</li>
            <li>Honey Dip</li>
            <li>Toasted Coconut</li>
          </ul>
        </div>
        <div className="specialty-list">
          <h1>SPECIALTIES</h1>
          <ul>
            <li>Sugar Raisin</li>
            <li>White Cream Coconut</li>
            <li>Cream Chocolate</li>
            <li>Sour Cream</li>
            <li>Old Fashioned Cake</li>
            <li>Old Fashioned Cruller</li>
            <li>Old Fashioned Cinnamon </li>
            <li>French Toast</li>
            <li>Sugar Jelly</li>
            <li>White Cream</li>
            <li>Jelly Powdered</li>
            <li>Double Chocolate</li>
            <li>Chocolate Chip</li>
            <li>Lemon Poppy</li>
            <li>Cappuccino</li>
            <li>Pistachio</li>
            <li>Banana Nut</li>
          </ul>
          <ul>
            <li>Black and White</li>
            <li>Linzer Tart</li>
            <li>Bavarian Cream</li>
            <li>Chocolate Coconut</li>
            <li>Espresso Cake</li>
            <li>Baked Apple Turnover</li>
            <li>Red Velvet</li>
            <li>Chocolate Cake </li>
            <li>Red Marble Cruller</li>
            <li>Blueberry Buttermilk </li>
            <li>S’mores</li>
            <li>Apple Crumb</li>
            <li>Plain Jelly</li>
            <li>Lemon</li>
            <li>Strawberry</li>
            <li>Carrot</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Donuts;
