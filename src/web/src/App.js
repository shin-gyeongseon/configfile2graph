"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./App.css");
const lineplot_1 = __importDefault(require("./lineplot"));
require("d3");
const d3 = __importStar(require("d3"));
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;
function App() {
    // const data: Object = {
    //   "field": "ddsajkf",
    //   "field1": "ddsajkf",
    //   "field2": "ddsajkf",
    //   "field3": "ddsajkf",
    // }
    const [data, setData] = (0, react_1.useState)(() => d3.ticks(-2, 2, 200).map(Math.sin));
    function onMouseMove(event) {
        const [x, y] = d3.pointer(event);
        setData(data.slice(-200).concat(Math.atan2(x, y)));
    }
    return (<div className="bg-gradient-to-r from-blue-600 to-purple-500 p-10" onMouseMove={onMouseMove}>
      <p className="text-white/80 text-xl font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, explicabo
        doloremque deserunt, voluptates, fugiat dolorem consectetur odio autem
        quas ipsa veniam ducimus necessitatibus exercitationem numquam assumenda
        natus beatae sed velit!
      </p>      
      <lineplot_1.default data={data}></lineplot_1.default>
    </div>);
}
exports.default = App;
//# sourceMappingURL=App.js.map