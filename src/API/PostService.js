import axios from "axios";

export default class PostService {
	static async getAll(limit = 10, page = 1) {
		const response = await axios.get('https:/jsonplaceholder.typicode.com/posts', {
			params: {
				_limit: limit,
				_page: page
			}
		})
		return response;
	}

	static async getById(id) {
		//console.log('getPostById', id);

		const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
	//	console.log('getPostById',response);
		return response;
	}

	static async getCommentsByPostId(id) {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
		return response;
  }
}

//'https:/jsonplaceholder.typicode.com/posts/?_limit=-1&page=1'