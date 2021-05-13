import React from "react";
import { Form } from "react-bootstrap";

function SelectExpense() {
  const expenses = [
    "Food",
    "Car",
    "Bills",
    "Home",
    "Entertainment",
    "Shopping",
    "Clothing",
    "Insurance",
    "Tax",
    "Telephone",
    "Health",
    "Sports",
    "Baby",
    "Pet",
    "Beauty",
    "Electronics",
    "Travel",
    "Education",
    "Office",
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

export default SelectExpense;
