import React, { ReactElement } from "react";
import useDogs from "../../../hooks/dogs/getDogs";
import DogImage from "../dog-image";
import { Button, Grid } from "@mui/material";
import '../../../App.css';
import { queryClient } from "../../../lib/react-query";
import { TypewrittenTitle } from "../typewritten-title";

const onButtonClick = () => {
  queryClient.invalidateQueries("dogs")
}

const DogsGallery = (
): ReactElement => {
  const { data, error, isLoading } = useDogs();

  if (error) {
    return (
      <h1>There had been an error retrieving the dogs.  Please whistle louder 😆!</h1>
    )
  }

  if (isLoading) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <div>
      <TypewrittenTitle>five random dogs</TypewrittenTitle>
      <Grid container spacing={2}>
        {data?.data.map((dog) => {
          return(
            <DogImage dog={dog} />
          )
        })}
      </Grid>
      <Button variant="contained" sx={{ backgroundColor: "orange" }} onClick={() => onButtonClick()} style={{ margin: 20 }}>five more random dogs</Button>
    </div> 
  );
};

export default DogsGallery;