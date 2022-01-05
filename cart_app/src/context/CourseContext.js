import createDataContext from './createDataContext';
import udemyclone from "../api/udemyclone";

const courseReducer = (state, action) => {

  switch (action.type) {
    case 'get_courses':
      return action.payload;
    case 'get_cartcourses':
      return state.filter(courses => courses.added === '1');
    case 'delete_course':
      return state.filter(courses => courses.id !== action.payload);
    case 'edit_course':
      return state.map((courses) => {
        return courses.id === action.payload.id ? action.payload : courses;
      });
    default:
      return state;
  }

};

const getCartCourses = dispatch => {
  return async () => {

    response = await udemyclone.get('/').catch(error => console.log(error));
    dispatch({ type: 'get_cartcourses', payload: response.data });

  };
};

const getCourses = dispatch => {
  return async () => {

    response = await udemyclone.get('/').catch(error => console.log(error));
    dispatch({ type: 'get_courses', payload: response.data });

  };
};

const editCourse = (dispatch) => {
  return async (id, is_added, author, date_created, image_url, name, stock, title, callback) => {

    await udemyclone.put(`/update/${id}/`, { added: is_added, author, date_created, image_url, name, stock, title });

    dispatch({ type: 'edit_course', payload: { id, added: is_added, author, date_created, image_url, name, stock, title } });
    callback();
  };
};

const deleteCourse = dispatch => {
  return async (id) => {

    await udemyclone.delete(`/delete/${id}/`);
    dispatch({ type: 'delete_course', payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  courseReducer,
  { deleteCourse, editCourse, getCourses, getCartCourses },
  []
);