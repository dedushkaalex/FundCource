import React, { useRef, useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript es5', body: "Description" },
    { id: 2, title: 'Javascript es6', body: "Description" },
    { id: 3, title: 'Javascript es7', body: "Description" }
  ])

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault()
   const newPost = {
     id: Date.now(),
     title,
     body
   }
   setPosts([...posts, newPost])
   setTitle('')
   setBody('')
  }

  return (
    <div className="App">
      <form>
        <MyInput 
        type="text" 
        placeholder="Название поста" 
        value={title} 
        onChange={event => setTitle(event.target.value)}
        ref={bodyInputRef}
        />
        <MyInput type="text" placeholder="Описание поста" value={body} onChange={event => setBody(event.target.value)}/>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
     <PostList posts={posts} title={"Посты про JS"}/>

    </div>
  )
}

export default App;
