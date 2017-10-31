import React from "react";
import ReactDOM from "react-dom";
import PieHolder from "./charts";

const app = document.getElementById('app');

ReactDOM.render(<PieHolder width={400} height={400} data={[1, 2, 3, 2, 9]}/>,
app);
