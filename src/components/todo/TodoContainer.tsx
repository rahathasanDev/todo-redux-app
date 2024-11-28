const TodoContainer = () => {
  return (
    <div>
      <div>
        <button>Add todo</button>
        <button>Filter</button>
      </div>
      <div className="border-red-500 w-full h-[500px] rounded-xl">
        <div>
          <input type="checkbox" name="" id=""/>
          <p>Todo Title</p>
          <p>Time</p>
          <p>desciption</p>
          <div>
            <button>Delete</button>
            <button>Edit</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TodoContainer;