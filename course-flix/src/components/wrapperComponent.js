import { connect } from 'react-redux';
import Courses from '../courses/courses';
import { bindActionCreators } from 'redux';
import { removeCourse } from '../redux/actions';
import { addCourse } from '../redux/actions';
import { AddCourse } from '../courses/add-course';

function mapStateToPropsCourses(state) {
  return {
    courses: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeCourse }, dispatch);
}

function mapDispatchAddCourseToProps(dispatch) {
  return bindActionCreators({ addCourse }, dispatch);
}
export const WrapperComponent = connect(
  mapStateToPropsCourses,
  mapDispatchToProps
)(Courses);

export const AddWrapAddComponent = connect(
  mapStateToPropsCourses,
  mapDispatchAddCourseToProps
)(AddCourse);
