import React, { useState } from 'react';
import './App.css';
import LinePlot from './lineplot';
import "d3";
import * as d3 from 'd3';

function App() {
  const [data, setData] = useState(() => d3.ticks(-2, 2, 200).map(Math.sin));

  function onMouseMove(event: any) {
    const [x, y] = d3.pointer(event);
    setData(data.slice(-200).concat(Math.atan2(x, y)));
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-500 p-10" onMouseMove={onMouseMove}>
      <p className="text-white/80 text-xl font-semibold">
      I have created an example service as a VSCode extension. 
      This project is being conducted as an MVP (Minimum Viable Product). 
      The basic setup involves creating a webview using React. 
      Although I have completed the interface design, I was not able to fully learn the D3 library to render the desired graph. 
      Therefore, I am concluding the work at this stage. 
      I hope this can be helpful to someone.
      </p>      
      <LinePlot data={data}></LinePlot>
    </div>
  );
}

export default App;