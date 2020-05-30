import React from "react";
import utils from "../utils/functions";
import convertDataType from "../utils/convertDataType";

export default function FunctionUI(props) {
   const renderInputs = (num) => {
      const inputs = [];
      for (let i = 0; i < num; i++) {
         const id = `input-${props.name}-${i}`;

         inputs.push(
            <input
               type="text"
               className="form-control inline-action"
               key={id}
               id={id}
            />
         );
      }
      return inputs;
   };

   const getUserInput = (e, inputs, name) => {
      const inputValues = [];
      for (let i = 0; i < inputs; i++) {
         const element = document.getElementById(`input-${name}-${i}`);
         const value = element.value;
         // console.log({ element, value });
         const convertedValue = convertDataType(value);
         inputValues.push(convertedValue);
      }
      // const result = utils[name](...inputValues);
      // console.log(result);
      // utils.increment

      console.log(inputValues);
      console.log("props name: ", props.name);
      props.showResult(name);
   };

   return (
      <div className="col-12 col-lg-8 offset-lg-2 mb-5">
         <p className="name">
            <b>{props.name}</b>&nbsp;-&nbsp;{props.desc}
         </p>
         <pre style={{ display: "none" }}>
            <code></code>
         </pre>
         <div className="actions float-right">
            {renderInputs(props.inputs)}
            <button
               className="btn btn-primary inline-action"
               onClick={(e) => {
                  getUserInput(e, props.inputs, props.name);
               }}
            >
               Run
            </button>
         </div>
         <div className="clearfix mb-3"></div>
         <div className="alert alert-primary" style={{ display: "none" }}></div>
         <div className="alert alert-danger" style={{ display: "none" }}></div>
      </div>
   );
}
