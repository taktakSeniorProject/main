import React from "react";
import { Button, Input } from "antd";

function PriceFilter({
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
  onApplyFilter,
}) {
  return (
    <div>
      <label htmlFor="minPrice">Minimum price:</label>
      <Input
        type="number"
        id="minPrice"
        value={minPrice}
        onChange={(e) => onMinPriceChange(Number(e.target.value))}
      />
      <br />
      <label htmlFor="maxPrice">Maximum price:</label>
      <Input
        type="number"
        id="maxPrice"
        value={maxPrice}
        onChange={(e) => onMaxPriceChange(Number(e.target.value))}
      />
      <br />
      <Button onClick={onApplyFilter}>Apply filter</Button>
    </div>
  );
}

export default PriceFilter;
