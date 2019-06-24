export function addCourse(course) {
  return {
    type: 'ADD_COURSE',
    course
  };
}

export function removeCourse(index) {
  return {
    type: 'REMOVE_COURSE',
    index
  };
}
