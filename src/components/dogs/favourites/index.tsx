import { Grid } from "@mui/material";
import { ReactElement } from "react";
import { useFavourites } from "../../../context/favourites";
import DogImage from "../dog-image";
import { TypewrittenTitle } from "../typewritten-title";

const Favourites = (): ReactElement => {
  const { favourites } = useFavourites();
  console.log("fav",favourites)
  return (
    <div>
      <TypewrittenTitle>favourites</TypewrittenTitle>
      <Grid container spacing={2}>
        {favourites.map((url) => {
          return(
            <DogImage dog={{ image_url: url }} isFavouritePage={true} />
          )
        })}
      </Grid>
    </div> 
  );
}

export default Favourites;