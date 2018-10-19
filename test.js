import React from 'react';
import { shallow, mount , render } from 'enzyme';
import NewTask from './client/src/components/new-task.jsx';
import TaskListEntry from './client/src/components/task-list-entry.jsx';
import TaskList from './client/src/components/task-list.jsx';

// a trial to write tests but need to be fixed 

describe('TaskListEntry tests', () => {
 test('should render TaskListEntry component correctly', () => {
     expect(render(
       <TaskListEntry />
     )).toMatchSnapshot()
 })

 
  test('should set the edit flag when an edit button is clicked', () => {
    const wrapper = render(<TaskListEntry />);
    const editbtn = wrapper.find("button.edit");
    editbtn.simulate('click');
    expect(wrapper.state().editFlag).toEqual(true)
   })

})

describe('Render components', () => {
 test('should shallow NewTask component correctly', () => {
     expect(shallow(
       <NewTask />
     )).toMatchSnapshot()
 })
 test('should mount TaskList component correctly', () => {
     expect(mount(
       <TaskList tasks={[]}/>
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
