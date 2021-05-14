import React from "react";
// import { Card } from "react-bootstrap";
import "./entry.css";
import { TiEdit , TiDelete } from "react-icons/ti";

function Entry() {
  return (
    <div className={"entry_container"}>
        <div className={"entry_container_left"}>
          Shopping
        </div>
      <div className={"entry_container_right"}>
            <div className={"entry_container_amt"}>
                $1200
            </div>

            <div className={"entry_container_icon"}>
                <div >
                    <TiEdit size={23}/>
                </div>
                <div>
                <TiDelete size={23}/>
                </div>

             </div>
      </div>
    </div>
  );
}

export default Entry;
