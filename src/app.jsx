import React from "react";
import { useState } from "react";
import "./app.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import Results from "./components/results";


// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//       requestParams: {},
//     };
//   }
//   callApi = (requestParams) => {
//     // mock output
//     const data = {
//       count: 2,
//       results: [
//         {name: 'fake thing 1', url: 'http://fakethings.com/1'},
//         {name: 'fake thing 2', url: 'http://fakethings.com/2'},
//       ],
//     };
//     this.setState({data, requestParams});
//   }
//   render() {
//     return (
//       <React.Fragment>
//         <Header />
//         <div>Request Method: {this.state.requestParams.method}</div>
//         <div>URL: {this.state.requestParams.url}</div>
//         <Form handleApiCall={this.callApi} />
//         <Results data={this.state.data} />
//         <Footer />
//       </React.Fragment>
//     );
//   }
// }


function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  function callApi(requestParams) {
    const newData = {
      results: [
        // {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        // {name: 'fake thing 2', url: 'http://fakethings.com/2'},
        {method:requestParams.method},
        {url:requestParams.url},
        {response:requestParams.data},
      ],
    };

    setData(newData);
    setRequestParams(requestParams);
  }

  return (
    <>
      {/* {console.log(requestParams)} */}
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </>
  );
}

export default App;