import React from 'react';
import axios from 'axios';

export class AddCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseName: '',
      courseDuration: '',
      coursePrice: '',
      invalidCourseName: '',
      invalidCourseDuration: '',
      invalidCoursePrice: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    let data = {
      id: this.props.courses.length + 1,
      name: this.state.courseName,
      price: this.state.coursePrice,
      duration: this.state.courseDuration
    };
    event.preventDefault();
    console.log(data);

    this.props.addCourse(data);

    // const promise = axios.post('http://my-json-server.typicode.com/ArunJH04/ecommerce/courses', {
    //   method: 'POST',
    //   body: data
    // });
    // promise.then(response => response.data);
    // console.log(data);
  }

  handleNameChange(event) {
    this.setState({ courseName: event.target.value });
    if (event.target.value.length < 4 || event.target.value.length > 8) {
      this.setState({
        invalidCourseName: 'cannot be less than 4 and greater than 8'
      });
    } else {
      this.setState({
        invalidCourseName: ''
      });
    }
  }

  handleDurationChange(event) {
    this.setState({ courseDuration: event.target.value });
    if (event.target.value.length < 4 || event.target.value.length > 8) {
      this.setState({
        invalidCourseDuration: 'cannot be less than 4 and greater than 8'
      });
    } else {
      this.setState({
        invalidCourseDuration: ''
      });
    }
  }

  handlePriceChange(event) {
    this.setState({ coursePrice: event.target.value });
    if (event.target.value.length < 4 || event.target.value.length > 8) {
      this.setState({
        invalidCoursePrice: 'cannot be less than 4 and greater than 8'
      });
    } else {
      this.setState({
        invalidCoursePrice: ''
      });
    }
  }

  render() {
    return (
      <div className="container-fluid" style={{ width: 30 + 'rem' }}>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Course Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={this.state.value}
              placeholder="Enter Name"
              onChange={this.handleNameChange}
            />
            <div>
              {this.state.invalidCourseName ? (
                <span className="alert alert-danger">{this.state.invalidCourseName}</span>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="form-group">
            <label>Duration</label>
            <input
              type="text"
              className="form-control"
              id="duration"
              placeholder="Enter Duration"
              onChange={this.handleDurationChange}
            />
            <div>
              {this.state.invalidCourseDuration ? (
                <span className="alert alert-danger">{this.state.invalidCourseDuration}</span>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              placeholder="Enter Price"
              onChange={this.handlePriceChange}
            />
            <div>
              {this.state.invalidCoursePrice ? (
                <span className="alert alert-danger">{this.state.invalidCoursePrice}</span>
              ) : (
                ''
              )}
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
