import { useEffect, useRef } from "react";
export const useObserver = (ref, canLoad, isLoading, callback) => {
	const observer = useRef();

	useEffect(() => {
		if (isLoading) return; // обзервер уже есть
		if (observer.current) observer.current.disconnect(); // если он был, то отключаем все слежки
		var cb = function(entries, observer) {
		  if (entries[0].isIntersecting && canLoad) {   //canLoad = currentPage < totalPages то что будет ограничивать загрузку страниц
			 callback();
		  }
		};
		observer.current = new IntersectionObserver(cb);
		observer.current.observe(ref.current); // за каким элементом будем наблюдать
	 }, [isLoading]);
}