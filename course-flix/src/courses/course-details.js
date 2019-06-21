import React from 'react';

export class CourseDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>Course Details {this.props.selectedCourseId}</h1>;
  }
}
