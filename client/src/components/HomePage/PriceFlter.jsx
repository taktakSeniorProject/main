import React from 'react';

function PriceFilter({minPrice, maxPrice, onMinPriceChange, onMaxPriceChange, onApplyFilter}) {
  return (
    <div>
      <label htmlFor="minPrice">Minimum price:</label>
      <input type="number" id="minPrice" value={minPrice} onChange={(e) => onMinPriceChange(Number(e.target.value))} />
      <br />
      <label htmlFor="maxPrice">Maximum price:</label>
      <input type="number" id="maxPrice" value={maxPrice} onChange={(e) => onMaxPriceChange(Number(e.target.value))} />
      <br />
      <button onClick={onApplyFilter}>Apply filter</button>
    </div>
  );
}

export default PriceFilter;
