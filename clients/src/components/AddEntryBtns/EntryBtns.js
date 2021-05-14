import React, { useState } from "react";
import { Container, Button, Col, Row, Modal } from "react-bootstrap";
import Input from "../UI/Input/Input";
import SelectExpense from "../UI/Select/SelectExpense";
import SelectIncome from "../UI/Select/SelectIncome";

function EntryBtns() {
  const [showExpense, setShowExpense] = useState(false);
  const handleCloseExp = () => setShowExpense(false);
  const handleShowExp = () => setShowExpense(true);

  const [showIncome, setShowIncome] = useState(false);
  const handleCloseInc = () => setShowIncome(false);
  const handleShowInc = () => setShowIncome(true);

  
  return (
    <Container style={{ marginTop: "40px" , width:"720px" }}>
      <Row>
        <Col>
          <Button onClick={handleShowExp} block variant="danger">
            Add An Expense Entry
          </Button>
        </Col>
        <Col>
          <Button onClick={handleShowInc} block variant="success">
            Add An Income Entry
          </Button>
        </Col>

        {/* For displaying Expense Modal */}
        <Modal
          style={{ padding: "50px" }}
          centered
          size="lg"
          show={showExpense}
          onHide={handleCloseExp}
          width=""
        >
          <Container>
            <Modal.Header closeButton>
              <Modal.Title>Add Expense Entry</Modal.Title>
            </Modal.Header>
            <Input
              label="Amount"
              value=""
              type="text"
              placeholder="$100"
              onChange={() => {}}
            />
            <Input
              label="Description"
              value=""
              type="text"
              placeholder="Day out with the gals"
              onChange={() => {}}
            />
            <SelectExpense />
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseExp}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCloseExp}>
                Submit
              </Button>
            </Modal.Footer>
          </Container>
        </Modal>


        {/* for displaying Income Modal */}
        <Modal
          style={{ padding: "50px" }}
          centered
          size="lg"
          show={showIncome}
          onHide={handleCloseInc}
          
        >
          <Container>
            <Modal.Header closeButton>
              <Modal.Title>Add Income Entry</Modal.Title>
            </Modal.Header>
            <Input
              label="Amount"
              value=""
              type="text"
              placeholder="$100"
              onChange={() => {}}
            />
            <Input
              label="Description"
              value=""
              type="text"
              placeholder="Stock Dividends"
              onChange={() => {}}
            />
            <SelectIncome />
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseInc}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCloseInc}>
               Submit
              </Button>
            </Modal.Footer>
          </Container>
        </Modal>

      
  
      </Row>
    </Container>
  );
}

export default EntryBtns;
