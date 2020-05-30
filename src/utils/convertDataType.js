const isArray = (value) => {
   return value && typeof value === "object" && value.constructor === Array;
   /* https://webbjocke.com/javascript-check-data-types/ */
};

function isObject(value) {
   return value && typeof value === "object" && value.constructor === Object;
   /* https://webbjocke.com/javascript-check-data-types/ */
}

function jsonParse(str) {
   try {
      JSON.parse(str);
   } catch (err) {
      //console.log(err);
      return str;
   }
   return JSON.parse(str);
}

const convertDataType = (str) => {
   if (str === "null") return null;
   if (str === "undefined") return undefined;
   if (str.toLowerCase() === "true") return true;
   if (str.toLowerCase() === "false") return false;
   // eslint-disable-next-line
   if (str == Number(str)) return Number(str);
   const getStrOrJSON = jsonParse(str);
   if (isArray(getStrOrJSON)) return JSON.parse(str);
   if (isObject(getStrOrJSON)) return JSON.parse(str);
   else return str;
};

export default convertDataType;
