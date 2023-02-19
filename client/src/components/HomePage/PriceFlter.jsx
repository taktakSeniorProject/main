import React from 'react';
import { Slider, InputNumber, Row, Col, Button } from 'antd';

function PriceFilter({ minPrice, maxPrice, onMinPriceChange, onMaxPriceChange, onApplyFilter }) {
  const onMinPriceInputChange = (value) => {
    onMinPriceChange(value);
  };

  const onMaxPriceInputChange = (value) => {
    onMaxPriceChange(value);
  };

  return (
    <div>
      <Row>
        <Col span={8}>
          <label htmlFor="minPriceInput">Min Price:</label>
          <InputNumber
            id="minPriceInput"
            style={{ marginLeft: 16 }}
            value={minPrice}
            onChange={onMinPriceInputChange}
          />
        </Col>
        <Col span={16}>
        <Slider
  range
  min={0}
  max={3000}
  defaultValue={[minPrice, maxPrice]}
  onChange={([min, max]) => {
    onMinPriceChange(min);
    onMaxPriceChange(max);
  }}
/>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <label htmlFor="maxPriceInput">Max Price:</label>
          <InputNumber
            id="maxPriceInput"
            style={{ marginLeft: 16 }}
            value={maxPrice}
            onChange={onMaxPriceInputChange}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Button onClick={onApplyFilter}>Apply filter</Button>
        </Col>
      </Row>
    </div>
  );
}

export default PriceFilter;