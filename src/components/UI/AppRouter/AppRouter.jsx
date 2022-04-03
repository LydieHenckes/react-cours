import {useContext} from 'react';
import {Routes, Route} from 'react-router-dom';
import AboutPage from "../../../pages/AboutPage";
import PostsPage from "../../../pages/PostsPage";
import NotFoundPage from "../../../pages/NotFoundPage";
import PostIdPage from '../../../pages/PostIdPage';
import LoginPage from '../../../pages/LoginPage';
 import { privateroutes, publicroutes } from '../../router';
import { AuthContext } from '../../../context';
import Loader from '../loader/Loader'

const AppRouter = () => {
   const {isAuth, isLoading} = useContext(AuthContext);

   if (isLoading) {
      return <Loader />
   }

	return (
      <>
         {isAuth 
            ? 
            <Routes>
               <Route path="/" end element={<PostsPage />} />
               <Route path="/posts" end element={<PostsPage />} />
               <Route path="/posts/:id" end element={<PostIdPage />} />            
               <Route path="about" element={<AboutPage />} />
               <Route path="*" element={<NotFoundPage />}  />     
             </Routes>
            : 
            <Routes>
               <Route path="/login" element={<LoginPage />} />
               <Route path="*" element={<LoginPage />}
            />     
            </Routes>
         }
      </>


 
	)
}

export default AppRouter;

/**
 * <Routes>
            <Route path="/" end element={<PostsPage />} />
            <Route path="/posts" end element={<PostsPage />} />
            <Route path="/posts/:id" end element={<PostIdPage />} />            
            <Route path="about" element={<AboutPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />}
            />     
         </Routes>
 */


/*
redirect v6
import {Routes, Route, Navigate} from 'react-router-dom';

        <Route
           path="/error"
            element={<NotFoundPage />}
         />  

         <Route
           path="*"
            element={<Navigate to="/error" />}
         /> 

      // v5  в файле rourer/index.js описаны константы так:
      export const routes = [
      {
         path: '/about',
         component: AboutPage,
         exact: true
      },
         ... 
      {
         path: '/posts/:id',
         component: PostIdPage,
         exact: true
      }
      ]

      и потом:
      <Routes>
         {routes.map = (route => {
            <Route 
               path = {route.path}
               component = {route.component}
               exact = {route.exact}
               key ={route.path}
            />
         })}
      </Routes>
          // или простой вариант без использования этого файла
   <Switch>
      <Route path = "/posts" exact >
         <PostsPage />
      <Route/>
      <Route path = "/posts/:id" exact >
         <PostIdPage />
      <Route/>
      <Redirect to = "/posts" />
   </Switch>
*/