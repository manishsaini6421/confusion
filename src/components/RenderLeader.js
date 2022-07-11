import React from "react";
import { Media } from "reactstrap";
function RenderLeader({ leader }) {
  return (
    <div key={leader.id} className="col-12 mt-5">
    <Media tag="ul" className="row">
      <Media left className="col-12 col-md-2">
        <Media object src={leader.image} alt={leader.name} />
      </Media>
      <Media body className="col-12 col-md-10">
        <Media heading>{leader.name}</Media>
        <h6>{leader.designation}</h6>
        <p>{leader.description}</p>
      </Media>
    </Media>
  </div>
  );
}

export default RenderLeader;
