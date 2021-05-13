import React from "react";
import { Form } from "react-bootstrap";

function SelectIncome() {
  const expenses = [
    "Salary",
    "Awards",
    "Grants",
    "Sale",
    "Rental",
    "Refunds",
    "Coupons",
    "Lottery",
    "Dividends",
    "Investments",
    "Others",
  
  ];

  return (
    <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Label>Category</Form.Label>
      <Form.Control as="select">
        {expenses.map((exp) => {
          return <option value={exp}>{exp}</option>;
        })}
      </Form.Control>
    </Form.Group>
  );
}

export default SelectIncome;
