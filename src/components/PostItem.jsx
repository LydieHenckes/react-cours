import { useNavigate } from 'react-router-dom';
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
	const navigate = useNavigate();

	function handleClick(id) {
		navigate(`/posts/${id}`);
	 }


	return (
		<div className='post'>
			<div className='post__content'>
				<strong>{props.post.id}. {props.post.title}</strong>
				<div>
					{props.post.body}
				</div>
			</div>
			<div className='post__btns'>
				<MyButton onClick = {() => handleClick(props.post.id)} >Ouvrir</MyButton>
				<MyButton onClick = {()=> props.remove(props.post)} >Supprimer</MyButton>
			</div>
		</div>
	)
}

export default PostItem;