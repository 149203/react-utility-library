import React from "react";
import "./style/master.scss"; // applies global scss styles
import { uiData } from "./data/ui";
import FunctionUI from "./components/FunctionUI";
import orderBy from "lodash/orderBy";

export default class App extends React.Component {
   constructor(props) {
      super(props);
      console.log(uiData);
      const components = uiData.map((component) => {
         return {
            name: component.name,
            desc: component.desc,
            inputs: component.inputs,
            isFavorite: component.isFavorite,
            order: component.order,
            type: component.type,
            typeNum: component.typeNum,
            isResultOpen: false,
            result: null,
            isCodeOpen: false,
         };
      });
      this.state = {
         isFavoritesChecked: false,
         allFuncs: orderBy(components, "order", "desc"),
         displayedFuncs: orderBy(components, "order", "desc"),
         orderBy: '["order", "desc"]',
      };
      //this.showResult = this.showResult.bind(this); // needed when passing a function to a child
   }

   filterFuncs(e) {
      const isFavoritesChecked = document.getElementById("viewMode-favorites")
         .checked;
      const searchInput = document
         .getElementById("search-input")
         .value.toLowerCase();
      const allFuncs = [...this.state.allFuncs];
      if (isFavoritesChecked) {
         this.setState({ isFavoritesChecked: true });
         const favoriteFuncs = allFuncs.filter((func) => {
            return func.isFavorite;
         });
         console.log(favoriteFuncs);
         const filteredFuncs = favoriteFuncs.filter((func) => {
            return func.name.toLowerCase().indexOf(searchInput) >= 0;
         });
         const orderArr = JSON.parse(this.state.orderBy);
         console.log("orderArr: ", orderArr);
         const orderedFuncs = orderBy(filteredFuncs, ...orderArr);
         this.setState({ displayedFuncs: orderedFuncs });
      } else {
         this.setState({ isFavoritesChecked: false });
         const filteredFuncs = allFuncs.filter((func) => {
            return func.name.toLowerCase().indexOf(searchInput) >= 0;
         });
         const orderArr = JSON.parse(this.state.orderBy);
         console.log("orderArr: ", ...orderArr);
         const orderedFuncs = orderBy(filteredFuncs, ...orderArr);
         this.setState({ displayedFuncs: orderedFuncs });
      }
   }

   changeOrder(e) {
      this.setState({ orderBy: e.target.value }, () => {
         this.filterFuncs();
      });
   }

   showResult(name) {
      const allFuncs = [...this.state.allFuncs];
      console.log(allFuncs);
      console.log(name);
   }

   render() {
      const getFunctionsNum = () => {
         return 94;
      };

      return (
         <div className="container">
            <div className="row">
               <div className="col-12 col-lg-8 offset-lg-2 mb-5">
                  <h1 className="d-flex justify-content-center">
                     JavaScript Utility Library
                  </h1>
                  <p className="text-center lead mb-4">
                     {getFunctionsNum()}&nbsp;functions documented
                  </p>
                  <div className="custom-control custom-radio custom-control-inline">
                     <input
                        type="radio"
                        id="viewMode-all"
                        name="viewMode"
                        className="custom-control-input"
                        checked={!this.state.isFavoritesChecked}
                        onChange={(e) => {
                           this.filterFuncs(e);
                        }}
                     />
                     <label
                        className="custom-control-label"
                        htmlFor="viewMode-all"
                     >
                        Show all
                     </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                     <input
                        type="radio"
                        id="viewMode-favorites"
                        name="viewMode"
                        className="custom-control-input"
                        checked={this.state.isFavoritesChecked}
                        onChange={(e) => {
                           this.filterFuncs(e);
                        }}
                     />
                     <label
                        className="custom-control-label"
                        htmlFor="viewMode-favorites"
                     >
                        Favorites
                     </label>
                  </div>

                  <div className="row mt-3">
                     <div className="col-6">
                        <input
                           type="text"
                           className="form-control"
                           placeholder="Search all functions"
                           aria-label="Search all functions"
                           aria-describedby="search-input"
                           id="search-input"
                           onChange={(e) => {
                              this.filterFuncs(e);
                           }}
                        />
                     </div>
                     <div className="col-6">
                        <select
                           value={this.state.orderBy}
                           className="form-control"
                           onChange={(e) => this.changeOrder(e)}
                        >
                           <option value='["order", "desc"]'>
                              Most recent
                           </option>
                           <option value='["order", "asc"]'>Oldest</option>
                           <option value='["name", "asc"]'>A - Z</option>
                           <option value='["name", "desc"]'>Z - A</option>
                        </select>
                     </div>
                  </div>
               </div>
               {this.state.displayedFuncs.map((functionUI) => {
                  const { name, desc, inputs } = functionUI;

                  return (
                     <FunctionUI
                        key={name}
                        name={name}
                        desc={desc}
                        inputs={inputs}
                        showResult={() => this.showResult}
                     />
                  );
               })}
            </div>
         </div>
      );
   }
}
