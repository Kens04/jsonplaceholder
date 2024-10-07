import useFetchData from "./hooks/useFetchData";

const Todos = () => {
  const { data } = useFetchData("https://jsonplaceholder.typicode.com/todos");
  return (
    <div>
      <h1>TODOS</h1>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
