import {useMemo} from 'react';
export const useSortedPosts = (posts, sort) => {
	const sortedPosts = useMemo(()=>{
		//коллбэк будет вызван только если изменятся значения
		if (sort) {
		  return [...posts].sort((a,b)=> a[sort].localeCompare(b[sort]));
		} 
		return posts;
  
	 }, [sort, posts]);
	return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
	const sortedPosts = useSortedPosts(posts, sort);
	const sortedAndSearchedPosts = useMemo(()=> {
		return sortedPosts.filter(post => 
		  post.title.toLowerCase().includes(query.toLowerCase())
		  )
	 }, [query, sortedPosts]);
	 return sortedAndSearchedPosts;
}

export const usePagination = (totalPages) => {
	const pagesArray = useMemo(() => {
		let result = [];
		for (let i=0; i<totalPages; i++) {
			result.push(i+1);
		}
		return result;
	}, [totalPages]);
	return pagesArray;
}
