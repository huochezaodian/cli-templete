import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
// import {
//   Card,
//   CardContent
// } from '@material-ui/core';
// import styles from './index.css';

// fake data generator
const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 ${grid}px 0 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  display: 'flex',
  padding: grid,
  overflow: 'auto'
});

class Nav2 extends React.Component {
  state = {
    items: getItems(6)
  }

  onDragStart = (...arg) => {
    console.log('start', arg);
  }

  onDragUpdate = (...arg) => {
    console.log('update', arg);
  }

  onDragEnd = (...arg) => {
    console.log('end', arg);
    // dropped outside the list
    const result = arg[0];
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  }

  render () {
    const { items } = this.state;
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragUpdata={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        <Droppable droppableId={'droppable'} direction="horizontal">
          {/* {
            sorts.map((sort, index) => <Card className={styles['card-wrapper']} key={index}>
              <CardContent className={styles['card-content']}>{sort}</CardContent>
            </Card>)
          } */}
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default Nav2;
