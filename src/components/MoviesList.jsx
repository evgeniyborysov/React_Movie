import { Grid } from "@mui/material";
import { Movie } from "./Movie";

export const MoviesList = ({ movies }) => {
	return (
		<Grid container spacing={2} justifyContent="center" alignItems="center">
			{movies.map((movie) => (
				<Movie key={movie.id} movie={movie} />
			))}
		</Grid>
	);
};
