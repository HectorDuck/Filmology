import { Card } from "../components";
import Loader from "../components/Loader";
import useFetch from "../hooks/useFetch";
import useTitle from "../hooks/useTitle";

const MovieList = ({ apiPath, title }) => {
	const { data: movies, loader } = useFetch(apiPath);
	useTitle(`${title} | React Movie Database`);
	return (
		<>
			{loader ? (<Loader />) : (
				<main>
					<section className="max-w-7xl mx-auto py-7">
						<div className="flex justify-start flex-wrap gap-10 others:justify-evenly">
							{movies.map((movie) => (
								<Card key={movie.id} movie={movie} />
							))}
						</div>
					</section>
				</main>
			)}
		</>
	);
};

export { MovieList };
