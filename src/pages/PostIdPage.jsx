import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';


const PostIdPage = () => {
	const params = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);

	/// quelque chose bizarre ! avec id ne marche pas !
	const [fetchPostById, isLoading, error] = useFetching(async (id) => {
		const response = await PostService.getById(id)
		setPost(response.data);
  })

  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
		const response = await PostService.getCommentsByPostId(id)
		setComments(response.data);
	})

  useEffect(() => {
		fetchPostById(params.id);
		fetchComments(params.id);
}, [])

	return (
		<div>
			<h1>Page de post {params.id}</h1>
			{isLoading 
				? <Loader />
				:	<div>
						<div>
							{post.id} {post.title}
						</div>
						<div>
							{post.body}
						</div>
					</div>
			}
			{isComLoading
				? <Loader/>
				: <div>
					{comments.map(comm =>
						<div key={comm.id} style={{marginTop: 15}}>
								<h5>{comm.email}</h5>
								<div>{comm.body}</div>
						</div>
					)}
				</div>
          }
		</div>
	)
}


export default PostIdPage;