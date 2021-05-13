import React from "react";
import { Card } from "react-bootstrap";
import "./entry.css";

function Entry() {
  return (
    <div className={"entry_container"}>
        <div className={"entry_container_left"}>
          CATEGORY
        </div>
      <div className={"entry_container_right"}>
            <div className={"entry_container_amt"}>
                AMOUNT
            </div>

            <div className={"entry_container_icon"}>
                <div>
                    icon 1
                </div>
                <div>
                    icon 2
                </div>

             </div>
      </div>
    </div>
  );
}

export default Entry;
