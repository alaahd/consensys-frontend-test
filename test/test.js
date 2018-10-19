import React from 'react';
import { shallow, mount , render } from 'enzyme';
import NewTask from '../client/src/components/new-task.jsx';
import TaskListEntry from '../client/src/components/task-list-entry.jsx';
import TaskList from '../client/src/components/task-list.jsx';
import App from '../client/src/index.jsx'



describe('Render components', () => {
 test('should render App component correctly', () => {
     expect(render(
       <App />
     )).toMatchSnapshot()
 })
 test('should shallow NewTask component correctly', () => {
     expect(shallow(
       <NewTask />
     )).toMatchSnapshot()
 })
 test('should mount TaskList component correctly', () => {
     expect(mount(
       <TaskList />
     )).toMatchSnapshot()
 })
 test('should render TaskListEntry component correctly', () => {
     expect(render(
       <TaskListEntry />
     )).toMatchSnapshot()
 })
})

describe("tests props and state",() => {
  test('render a document title', () => {
     const wrapper = shallow(
         <TaskList task="tasks" />
     );
     expect(wrapper.prop('task')).toEqual("tasks");
  })

  test('change the state when edit button is clicks', () => {
      const wrapper = shallow(<TaskListEntry />);
      const editButton = wrapper.find('.edit');
      editButton.simulate('click');
      expect(
          wrapper.state().editFlag).toEqual(true);
  })
})
