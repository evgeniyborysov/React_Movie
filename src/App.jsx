import { Box, Container } from "@mui/material";
import { MoviesList } from "./components/MoviesList";
import { useEffect, useState } from "react";
import AppBar from "./components/AppBar";
import { BasicPagination } from "./components/Pagination";

const API_KEY = process.env.REACT_APP_API_KEY;
const TOKEN = process.env.TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";

function App() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [query, setQuery] = useState("");
	const [page, setPage] = useState(1);
	const [pageQty, setPageQty] = useState(500);
	const [isSearch, setIsSearch] = useState(false);
	console.log(movies);

	const getMovies = async (page) => {
		console.log(page);
		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization: TOKEN,
			},
		};
		setLoading(true);
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
				options
			);
			const data = await response.json();
			console.log(data);
			setMovies(data.results);
		} catch (error) {
			setError(error);
		}
		setLoading(false);
	};

	const searchMovie = async (query, page) => {
		setLoading(true);
		try {
			const response = await fetch(
				`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`
			);
			const data = await response.json();
			setMovies(data.results);
			setPageQty(data.total_pages);
		} catch (errors) {
			setError(errors[0]);
		}
		setLoading(false);
	};

	useEffect(() => {
		getMovies(page);
	}, [page]);

	useEffect(() => {
		if (isSearch) {
			searchMovie(query, page);
		} else {
			getMovies(page);
		}
	}, [page, query, isSearch]);

	return (
		<>
			<AppBar
				searchMovie={setQuery}
				isSearch={setIsSearch}
				setPage={setPage}
			/>
			<Container fixed sx={{ mt: "15px" }}>
				<MoviesList movies={movies} loading={loading} error={error} />
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						mt: "15px",
						mb: "15px",
					}}
				>
					<BasicPagination
						onPageChange={setPage}
						page={page}
						pageQty={pageQty}
					/>
				</Box>
			</Container>
		</>
	);
}

export default App;
