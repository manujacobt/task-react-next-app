import { createStore } from 'redux';

const initialState = {
  students: [
    {
      id: 1,
      slNo: 1, // Add sl no here
      name: 'Student 1',
      age: 20,
    },
    {
      id: 2,
      slNo: 2, // Add sl no here
      name: 'Student 2',
      age: 22,
    },
  ],
  teachers: [
    {
      id: 1,
      slNo: 1,
      name: 'Teacher 1',
      age: 30,
    },
    {
      id: 2,
      slNo: 2,
      name: 'Teacher 2',
      age: 35,
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  return state;
};

const store = createStore(rootReducer);

export default store;
