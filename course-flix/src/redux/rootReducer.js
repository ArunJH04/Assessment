import courseObj from '../data/courseObj';

let rootReducer = function(currentState = courseObj, action) {
  switch (action.type) {
    case 'REMOVE_COURSE':
      return deleteCourse(currentState, action);
    case 'ADD_COURSE':
      return addCourse(currentState, action.course);
    default:
      return currentState;
  }
};

let deleteCourse = function(state, course) {
  let index = state.indexOf(course.index);
  return [...state.splice(0, index), ...state.splice(index + 1)];
};

let addCourse = function(state, data) {
  console.log([...state, data]);
  return [...state, data];
};

export default rootReducer;
