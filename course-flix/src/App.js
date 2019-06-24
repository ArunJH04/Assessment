import React from 'react';
import { WrapperComponent } from './components/wrapperComponent';

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     courses: []
  //   };
  //   this.handleFunc = this.handleFunc.bind(this);
  // }

  // componentDidMount() {
  //   let promise = axios.get('https://my-json-server.typicode.com/ArunJH04/ecommerce/courses');
  //   promise.then(response => {
  //     this.setState({
  //       courses: response.data
  //     });
  //   });
  // }

  // handleFunc = function(event) {
  //   console.log('clicked', event.target.id);
  // };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* <Courses
            key={this.state.courses.id}
            data={this.state.courses}
            clickFun={this.handleFunc}
          /> */}
          <WrapperComponent />
        </div>
      </div>
    );
  }
}

export default App;
