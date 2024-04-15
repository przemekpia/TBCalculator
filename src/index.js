import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





  
min = size[i - 1][0] * HP[i - 1][0];
for (let k = 1; k <= 4; k++) {
  if(k===4){
    if (min > size[i - 1][k] * HP[i - 1][k]) {
      min = size[i - 1][k] * HP[i - 1][k];
  }else if (k===3){

  }else{
    if (min > size[i - 1][k] * HP[i - 1][k]) {
      min = size[i - 1][k] * HP[i - 1][k];
  }
  }
    
}
if (
    size[i][j] * HP[i][j] <
    size[i][0] * HP[i][0] * ratio
) {
    size[i][j]++;
    iter = iter + command[i][j];
    break chunkLoop;
}
}
} else {
if (i === lowG) {
    if (j === 0) {
        size[i][j]++;
        iter = iter + command[i][j];
        break chunkLoop;
    } else {
        if (
            size[i][j] * command[i][j] <
            size[i][j - 1] * command[i][j - 1]
        ) {
            size[i][j]++;
            iter = iter + command[i][j];
            break chunkLoop;
        }
    }
  }
} else {
    if (
        size[i - 1][j] * HP[i - 1][j] >
        (size[i][j] + 1) * HP[i][j]
    ) {
        size[i][j]++;
        iter = iter + command[i][j];
        break chunkLoop;
    }
}
