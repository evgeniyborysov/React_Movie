import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export const Movie = ({ movie }) => {
	return (
		<Grid
			justifyContent="space-between"
			alignItems="center"
			align="center"
			item
			xs={12}
			sm={6}
			md={4}
			lg={3}
		>
			<Card sx={{ maxWidth: 300, height: 555 }}>
				<CardMedia
					sx={{ height: 430 }}
					image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					title={movie.title}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="span">
						{movie.title}
					</Typography>
					{/* <Typography variant="body2" color="text.secondary">
						{movie.overview}
					</Typography> */}
				</CardContent>
			</Card>
		</Grid>
	);
};
