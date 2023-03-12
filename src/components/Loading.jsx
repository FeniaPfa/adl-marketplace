import { CircularProgress, Stack} from "@mui/material";

export const Loading = () => {
    return (
      <>
      <Stack
          justifyContent="center"
          alignItems="center"
          gap="3rem"
          sx={{ margin: "5rem auto" }}
      >
          <CircularProgress size={200} color="primary" />

      </Stack>
  </>
    );
};
