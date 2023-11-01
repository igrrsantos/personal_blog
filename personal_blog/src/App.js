import './App.css'
import Posts from './components/posts'
import useListPosts from './hooks/useListPosts'

function App() {

  const { posts } = useListPosts()

  return (
    <div className="App">
      <Posts posts={posts}/>
    </div>
  )
}

export default App
