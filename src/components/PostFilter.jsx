
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
	return (
		<div>
        <MyInput 
            placeholder = "Recherche..." 
            value = {filter.query}
            onChange = {(e)=> setFilter({...filter, query: e.target.value})}
            type = "text"
        />
        <MySelect 
                  value = {filter.sort}
                  onChange = {selectedSort => setFilter({...filter, sort: selectedSort})}
                  defaultValue='Trier par'
                  options = {[
                    {value : 'title', name : 'Trier par titre'},
                    {value : 'body', name : 'Trier par description'}
                  ]}
        />
		</div>
	)
}


export default PostFilter;