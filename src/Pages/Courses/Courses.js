import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MenuBar from "../Shared/MenuBar/MenuBar";
import CoursesDetails from "./CoursesDetails";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/all-courses-details")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  });
  return (
    <div>
      <MenuBar />
      {courses.map((course) => (
        <CoursesDetails key={course.id} course={course}></CoursesDetails>
      ))}
    </div>
  );
};

export default Courses;
