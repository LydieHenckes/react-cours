import React from 'react';
import {useState, useEffect, useRef} from 'react';
import '../styles/App.css';
import PostList from '../components/PostList';
import MyButton from '../components/UI/button/MyButton';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/modal/MyModal';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount} from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';
import { useObserver } from '../hooks/useObserver';
import MySelect from '../components/UI/select/MySelect';

function PostsPage() {
  const [posts, setPosts] = useState([]);
/*   const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description 2'},
    {id: 3, title: 'Javascript 3', body: 'Description 3'}
  ]); */
 
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
//  const [isPostsLoading, setIsPostsLoading] = useState(false);

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const lastElement = useRef();
   // const observer = useRef(); сохранять какие-то данные чтобы не турять от рендера к рендеру


  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, currentPage);
    setPosts([...posts, ...response.data]);
    //setPosts(response.data);

    const totalCount = response.headers['x-total-count'];

    setTotalPages(getPageCount(totalCount, limit));
  })

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  useObserver(lastElement, currentPage<totalPages, isPostsLoading, () => {
    setCurrentPage(currentPage+1);
  })

  useEffect(()=> {
    fetchPosts(limit, currentPage);
  }, [currentPage, limit]);

  const changePage = (page) => {
    setCurrentPage(page)
    // fetchPosts(limit, page)
  }

/*   async function fetchPosts() {
    setIsPostsLoading(true);
    setTimeout(async ()=> {
      const posts = await PostService.getAll();
      setPosts(posts);
      setIsPostsLoading(false);
    }, 2000)
  } */
  
  return (
    <div className = "App">

      <MyButton style = {{marginTop: '30px'}} onClick = {()=> setModal(true)}>
        Créer un post
      </MyButton>
      <MyModal visible = {modal} setVisible= {setModal} >
         <PostForm create = {createPost} />
      </MyModal>
      
      <hr style = {{margin: '15px 0'}} />
      <PostFilter filter = {filter} setFilter= {setFilter}  />

      <MySelect 
        value = {limit}
        onChange = {value => setLimit(value)}
        defaultValue = "Posts par page"
        options = {[
          {value: 5, name: '5'},
          {value: 10, name: '10'},
          {value: 20, name: '20'},
          {value: -1, name: 'tout'},
        ]}
      />

      {postError && 
          <h1>Une erreur est survenue...{postError}</h1>}

      <PostList remove = {removePost} posts = {sortedAndSearchedPosts} title = 'Liste de posts' />
      <div ref= {lastElement}  style = {{height: '2px', background: '#7B3BA0'}} ></div>
      {isPostsLoading  &&
         <div style = {{display: 'flex', justifyContent : 'center', marginTop: '50px'}}>
            <Loader  />
         </div>
      }

      <Pagination currentPage = {currentPage} 
                  changeCurrentPage = {changePage} 
                  totalPages = {totalPages}
      />
      
    </div>
  );
}

export default PostsPage;

/**
 * страничная пагинация с кнопками
 * {isPostsLoading 
        ? <div style = {{display: 'flex', justifyContent : 'center', marginTop: '50px'}}>
            <Loader  />
         </div>
        : <PostList remove = {removePost} posts = {sortedAndSearchedPosts} title = 'Liste de posts' />
      }
      <Pagination currentPage = {currentPage} 
                  changeCurrentPage = {changePage} 
                  totalPages = {totalPages}
      />
 */

// const [selectedSort, setSelectedSort] = useState('');
 // const [searchQuery, setSearchQuery] = useState('');

 // const bodyInputRef = useRef(); //input non contrôlé
 // const [title, setTilte] = useState(''); //input contrôlé
 // const [body, setBody] = useState('');



/*   const sortPosts = (sort) => {
    setSelectedSort(sort);
    setFilter({...filter, sort: sort})


        {sortedAndSearchedPosts.length  
        ? <PostList remove = {removePost} posts = {sortedAndSearchedPosts} title = 'Liste de posts' />
        : <h1 
            style = {{textAlign: 'center'}} >
              Il n'y a pas de posts !
          </h1>
      }
  } */