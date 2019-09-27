import React from "react";

const submitBtn = {
  background: "#F2F2FF"
};

// This file exports all components
export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="10" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button
      {...props}
      style={{ float: "right", marginBottom: 10, border: "#A0C0DB" }}
      className="btn btn-success bg-secondary"
    >
      {props.children}
    </button>
  );
}
