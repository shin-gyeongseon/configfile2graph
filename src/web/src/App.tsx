import React, { useState } from 'react';
import './App.css';
import LinePlot from './lineplot';
import "d3";
import * as d3 from 'd3';


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

  const [data, setData] = useState(() => d3.ticks(-2, 2, 200).map(Math.sin));

  function onMouseMove(event: any) {
    const [x, y] = d3.pointer(event);
    setData(data.slice(-200).concat(Math.atan2(x, y)));
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-500 p-10" onMouseMove={onMouseMove}>
      <p className="text-white/80 text-xl font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, explicabo
        doloremque deserunt, voluptates, fugiat dolorem consectetur odio autem
        quas ipsa veniam ducimus necessitatibus exercitationem numquam assumenda
        natus beatae sed velit!
      </p>      
      <LinePlot data={data}></LinePlot>
    </div>
  );
}

export default App;