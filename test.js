import React from 'react';
import { shallow, mount , render } from 'enzyme';
import renderer from 'react-test-renderer';
import NewTask from './client/src/components/new-task.jsx';
import TaskListEntry from './client/src/components/task-list-entry.jsx';
import TaskList from './client/src/components/task-list.jsx';

describe('UI tests', () => {
 test('should render TaskListEntry component correctly', () => {
     expect(render(
       <TaskListEntry />
     )).toMatchSnapshot()
 })

 test('should shallow render NewTask component correctly', () => {
     expect(shallow(
       <NewTask />
     )).toMatchSnapshot()
 })

  test('should shallow render TaskList component correctly', () => {
     expect(shallow(
       <TaskList tasks={[]}/>
     )).toMatchSnapshot()
 })

})

describe('TaskListEntry tests', () => {
  
  test('should set the edit flag when an edit button is clicked', () => {
    const wrapper = shallow(<TaskListEntry />);
    const editbtn = wrapper.find(".edit");
    editbtn.simulate('click');
    expect(wrapper.state().editFlag).toEqual(true)
   })

})



