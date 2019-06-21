import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

// function Courses() {
//   return (
//     <ul>
//       <li>Angular</li>
//       <li>React</li>
//       <li>Node</li>
//       <li>.Net</li>
//       <li>MongoDB</li>
//       <li>React Native</li>
//     </ul>
//   );
// }

// export default Courses;

// *****card********

// render() {
//   return (
//     <div>
//       {this.props.data.length > 0 ? (
//         <div className="row">
//           {this.props.data.map(course => (
//             <div className="col-3">
//               <div className="card" style={{ width: 18 + 'rem' }}>
//                 <img src={course.imgURL} className="card-img-top" alt="..." />
//                 <div className="card-body">
//                   <h5 className="card-title">{course.name}</h5>
//                   <p className="card-text">
//                     Rs: {course.price}/-
//                     <br />
//                     Duration: {course.duration} Hrs
//                   </p>
//                   <a
//                     href="#"
//                     className="btn btn-primary"
//                     onClick={event => this.props.clickFun(event)}
//                   >
//                     Course Details
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <h1>No Courses Available !! </h1>
//       )}
//     </div>
//   );
// }

// ********** convert above function to class since we need to work on state ****************

class Courses extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.data.length > 0 ? (
          <BrowserRouter>
            <div className="row">
              {this.props.data.map(course => (
                <div className="col-3" key={course.id}>
                  <div className="card" style={{ width: 10 + 'rem' }}>
                    <img src={course.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{course.name}</h5>
                      <p className="card-text">
                        Rs: {course.price}/-
                        <br />
                        Duration: {course.duration} Hrs
                      </p>
                      {/* <a
                      href="#"
                      className="btn btn-primary"
                      onClick={event => this.props.clickFun(event)}
                    >
                      Course Details
                    </a> */}
                      <NavLink className="btn btn-primary" exact to={`/courses/${course.id}`}>
                        Details
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </BrowserRouter>
        ) : (
          <h1>No Courses Available !! </h1>
        )}
      </div>
    );
  }
}

export default Courses;
