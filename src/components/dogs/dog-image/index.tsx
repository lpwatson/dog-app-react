import { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { useFavourites } from "../../../context/favourites";

type Props = {
  dog: {
    image_url: string;
  },
  isFavouritePage?: boolean;
}

const DogImage = ({ dog, isFavouritePage }: Props) => {
  const { favourites, setFavourites } = useFavourites();
  const [favourite, setFavourite] = useState<boolean | undefined>(isFavouritePage);

  console.log("fav", favourite)

  const onImageClick = () => {
    setFavourite(!favourite);
  }
  
  useEffect(() => {
    if (favourites.find((url: string) => url === dog.image_url)) {
      setFavourite(true)
    } else {
      setFavourite(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favourites])

  useEffect(() => {
    if (favourite === true) {
      const updatedFavourites =
        favourites.find((url: string) => url === dog.image_url)
          ? [...favourites]
          : [...favourites, dog.image_url];
      setFavourites(updatedFavourites)
    } else {
      const updatedFavourites = favourites.filter((url) => url !== dog.image_url)
      setFavourites(updatedFavourites)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favourite])

  return(
    <Grid item xs={12} sm={6} md={4} key={dog.image_url} style={{ justifyContent: "flex-end"}}>
      {favourite && <StarIcon style={{ position: "absolute", zIndex: 1,  color: "orange", marginLeft: 270, marginTop: 15}}/>}
      <Button style={{ borderRadius: 30, border: favourite ?  "5px solid orange" : "none" }} onClick={() => onImageClick()}>
        <img alt="placeholder" width={300} height={300} src={dog.image_url} style={{ borderRadius: 25}} />
      </Button>
    </Grid>
  )
}

export default DogImage;