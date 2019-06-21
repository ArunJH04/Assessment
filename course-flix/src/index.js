import React from 'react';
import ReactDOM from 'react-dom';
import { AddCourse } from './courses/add-course';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import App from './App';
import { CourseDetails } from './courses/course-details';

ReactDOM.render(
  <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" activeStyle={{ color: 'blue' }} exact to="/list">
              All Courses <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeStyle={{ color: 'blue' }} exact to="/add">
              Add Courses <span className="sr-only">(current)</span>
            </NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
    <Route path="/add" exact component={AddCourse} />
    <Route path="/list" exact component={App} />
    <Route
      path="/courses/:id"
      exact
      strict
      render={({ match }) => {
        console.log(match);
        return <CourseDetails selectedCourseId={match.params.id} />;
      }}
      component={CourseDetails}
    />
  </BrowserRouter>,

  document.getElementById('root')
);
