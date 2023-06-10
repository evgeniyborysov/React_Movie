import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const BasicPagination = ({ onPageChange, pageQty, page }) => {
	const handleChange = (_, value) => {
		onPageChange(value);
	};
	return (
		<Stack spacing={2}>
			<Pagination count={pageQty} page={page} onChange={handleChange} />
		</Stack>
	);
};
