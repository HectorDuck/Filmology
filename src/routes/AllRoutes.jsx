import { Routes, Route, Navigate } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";
import PrivateRoute from "../components/PrivateRoute";
import Login from "../pages/Login";

const AllRoutes = () => {
    return (
        <div className="dark:bg-slate-700">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="now-playing" element={<PrivateRoute><MovieList apiPath="movie/now_playing" title="Now Playing" /></PrivateRoute>} />
                <Route path="movie/:id" element={<PrivateRoute><MovieDetail /></PrivateRoute>} />
                <Route path="movies/popular" element={<PrivateRoute><MovieList apiPath="movie/popular" title="Popular" /></PrivateRoute>} />
                <Route path="movies/top" element={<PrivateRoute><MovieList apiPath="movie/top_rated" title="Top Rated" /></PrivateRoute>} />
                <Route path="movies/upcoming" element={<PrivateRoute><MovieList apiPath="movie/upcoming" title="Upcoming" /></PrivateRoute>} />
                <Route path="search" element={<PrivateRoute><Search apiPath="search/movie" /></PrivateRoute>} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
};

export default AllRoutes;