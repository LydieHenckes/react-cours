import { usePagination } from '../../../hooks/usePosts';

const Pagination = ({totalPages, currentPage, changeCurrentPage}) => {
	let pagesArray = usePagination(totalPages);
	return (
      <div className='page__wrapper'>
          {pagesArray.map(p => 
              <span 
                className={currentPage === p ? 'page page__current' : 'page'} 
                key = {p} 
                onClick = {() => changeCurrentPage(p)}
              >
                  {p}
              </span>
          )}
      </div>
	)
}


export default Pagination;