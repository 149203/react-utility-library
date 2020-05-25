import React from "react";
import utils from "../utils/functions";
import convertDataType from "../utils/convertDataType";

export default function FunctionUI(props) {
   const renderInputs = (num, name) => {
      const inputs = [];
      for (let i = 0; i < num; i++) {
         inputs.push(
            <input
               type="text"
               className="form-control inline-action"
               key={i}
               id={`input-${name}-${i}`}
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
         const convertedValue = convertDataType(value);
         inputValues.push(convertedValue);
      }
      console.log(inputValues);
      const result = utils[name](...inputValues);
      console.log(result);
      // update state
      props.showResult(name, JSON.stringify(result));
   };

   return (
      <div className="col-12 col-lg-8 offset-lg-2 mb-5">
         <p className="name" onClick={(e) => props.showCode(props.name)}>
            <b>{props.name}</b>&nbsp;-&nbsp;{props.desc}
         </p>
         {props.isCodeOpen && (
            <pre>
               <code>{String(utils[props.name])}</code>
            </pre>
         )}
         <div className="actions float-right">
            {renderInputs(props.inputs, props.name)}
            <button
               className="btn btn-primary inline-action"
               onClick={(e) => getUserInput(e, props.inputs, props.name)}
            >
               Run
            </button>
         </div>
         <div className="clearfix mb-3"></div>
         {props.isResultOpen && (
            <div className="alert alert-primary">{props.result}</div>
         )}
      </div>
   );
}
