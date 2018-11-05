import React from 'react';

const HomeList = (props) => {
  const {
    isOpen,
    openHomeList,
    closeHomeList,
  } = props;
  return (
    <div>
      <strong onClick={() => isOpen ? closeHomeList() : openHomeList() }>Show/hide list</strong>
      {
        isOpen && (
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
          </ul>
        )
      }
    </div>
  );
}

export default HomeList;
