import { useContext } from "react";
import { Context } from '../context/CourseContext';

export default () => {

    const { editCourse, getCourses, getCartCourses, state } = useContext(Context);

    return [editCourse, getCourses, getCartCourses, state];

};
