import Post from "./Post"
import Todos from "./Todos"
import User from "./User"

function App() {

  return (
    <div style={{ margin: '1em' }}>
      <User />
      <Post />
      <Todos />
    </div>
  )
}

export default App
