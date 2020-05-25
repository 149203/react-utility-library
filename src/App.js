import React from "react";
import "./style/master.scss"; // applies global scss styles
import { uiData } from "./data/ui";
import FunctionUI from "./components/FunctionUI";
import orderBy from "lodash/orderBy";
import find from "lodash/find";

export default class App extends React.Component {
   constructor(props) {
      super(props);
      console.log(uiData);
      const stateData = uiData.map((component) => {
         return {
            name: component.name,
            isResultOpen: false,
            result: null,
            isCodeOpen: false,
         };
      });
      this.state = { components: stateData };
      this.showCode = this.showCode.bind(this);
      this.showResult = this.showResult.bind(this);
   }

   showCode(name) {
      const components = [...this.state.components];
      const thisObjInState = find(
         components,
         (component) => component.name === name
      );
      thisObjInState.isCodeOpen === false
         ? (thisObjInState.isCodeOpen = true)
         : (thisObjInState.isCodeOpen = false);

      this.setState({ components });
   }

   showResult(name, result) {
      const components = [...this.state.components];
      const thisObjInState = find(
         components,
         (component) => component.name === name
      );
      thisObjInState.isResultOpen = true;
      thisObjInState.result = result;
      console.log(result);

      this.setState({ components });
   }

   render() {
      const orderedData = orderBy(uiData, "name", "desc");

      const getFunctionsNum = () => {
         return 6;
      };

      return (
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <h1 className="d-flex justify-content-center">
                     JavaScript Functions: Basic
                  </h1>
                  <p className="text-center lead mb-4">
                     {getFunctionsNum()}&nbsp;functions documented
                  </p>
               </div>
               {orderedData.map((functionUI) => {
                  const { name, desc, inputs, order } = functionUI;
                  const thisObjInState = find(
                     this.state.components,
                     (component) => component.name === name
                  );
                  return (
                     <FunctionUI
                        name={name}
                        desc={desc}
                        inputs={inputs}
                        key={order}
                        isResultOpen={thisObjInState.isResultOpen}
                        isCodeOpen={thisObjInState.isCodeOpen}
                        showCode={this.showCode}
                        showResult={this.showResult}
                        result={thisObjInState.result}
                     />
                  );
               })}
            </div>
         </div>
      );
   }
}
