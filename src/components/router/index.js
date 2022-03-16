import AboutPage from "../../pages/AboutPage";
import LoginPage from "../../pages/LoginPage";
import PostIdPage from "../../pages/PostIdPage";
import PostsPage from "../../pages/PostsPage";

export const privateroutes = [
	{path: '/about', component: AboutPage, exact: true },
	{path: '/posts', component: PostsPage, exact: true },
	{path: '/posts/:id', component: PostIdPage, exact: true }
]
export const publicroutes = [
	{path: '/login', component: LoginPage, exact: true },
]

/*
		path="/posts" 
		end
		element={<PostsPage />}


	{
		path: '/about',
		component: AboutPage,
		exact: true
	}
*/