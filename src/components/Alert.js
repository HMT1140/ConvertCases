import React from "react";

function Alert(props) {
  return (
    <div>
      <div className="alert alert-warning d-flex align-items-center" role="alert">
        <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Warning:">
         
        </svg>
        <div>
            {props.Alert}
        </div>
      </div>
    </div>
  );
}

export default Alert;
