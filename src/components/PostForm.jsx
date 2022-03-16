import {useState} from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({create}) => {
	const [post, setPost] = useState({title: '', body: ''});

	const addNewPost = (e) => {
		e.preventDefault();
		const newPost = {
			...post, id: Date.now()
		}
		create(newPost);
	  // setPosts([...posts, newPost]); //развернули старый массив и добавили новый
	 // setPosts([...posts, {...post, id: Date.now()}]);
	  setPost({title: '', body: ''});
	 }

	return (
      <form>
        <MyInput 
          value = {post.title} 
          onChange = {e => setPost({...post, title: e.target.value})}  
          type= "text" 
          placeholder = "Titre de post"  
        />
        <MyInput 
          value = {post.body} 
          onChange = {e => setPost({...post, body: e.target.value})} 
          type= "text" 
          placeholder = "Description de post"  
        />

        {/*
        <input 
          ref = {bodyInputRef}
          type = "text"
          placeholder='Description de post'  
        />
        <MyInput 
          ref = {bodyInputRef}
          type= "text" 
          placeholder = "Description de post" 
        />
        */}
        

        <MyButton onClick = {addNewPost} >Créer un post</MyButton>
      </form>

	)
}


export default PostForm;