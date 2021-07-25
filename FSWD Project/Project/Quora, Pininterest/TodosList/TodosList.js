import React from "react";
class TodosList extends React.Component {
  render() {
    const { items, toggleTodoCompleted, deleteTodo } = this.props;
    return (
      <>
        <h5>Interview Questions</h5>
        {items.map((item) => {
          return (
            <>
              {item.deleted === false && (
                <div className="card mb-2">
                  <div class="card-body">
                    <p className="card-text">{item.title}</p>
                    <button
                      onClick={() => toggleTodoCompleted(item.id)}
                      className="btn btn-outline-success"
                    >
                      Like
                    </button>
                    <button
                      onClick={() => deleteTodo(item.id)}
                      className="btn btn-outline-warning"
                    >
                     Unlike
                    </button>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </>
    );
  }
}

export default TodosList;


