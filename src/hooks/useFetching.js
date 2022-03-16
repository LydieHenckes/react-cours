import {useState} from 'react';
export const useFetching = (callback) => {
	//перед коллбэком запустить крутилку и после скрыть
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const fetching = async (...args) => {
		try {
			setIsLoading(true);
			await callback(...args);
		} catch (e) {
			setError(e.message);
			console.log(e);
		} finally {
			setIsLoading(false);
		}
	}
	return [fetching, isLoading, error];
}