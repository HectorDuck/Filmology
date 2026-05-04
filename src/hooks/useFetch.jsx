import { useEffect, useState } from "react";
import { API_BASE_URL } from "../constants/env";
const useFetch = (apiPath, queryTerm="") => {

	//const fetch_url = `${API_BASE_URL}${apiPath}?api_key=${API_KEY}&query=${queryTerm}`
	const fetch_url = `${API_BASE_URL}peliculas`;
	const [loader, setLoader] = useState(true);
    const [data, setData] = useState([]);
    
    useEffect(() => {
		const fetchMovies = async () => {
			const response = await fetch(
				fetch_url
			);
			const json = await response.json();
			const mappedData = json.map((movie) => ({
				id: movie.id,
				title: movie.titulo,
				overview: movie.descripcion,
				poster_path: movie.imagen_url
			}));
			setData(mappedData);
			setLoader(false);
		};
        fetchMovies();
	}, [apiPath, queryTerm]);

    return { data, loader }
};

export default useFetch;