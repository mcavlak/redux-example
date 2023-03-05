import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Rating,
  Divider,
  Chip,
  Button,
} from "@mui/material";
import axios from "axios";
import {
  selectedProducts,
  removeSelectedProducts,
} from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { title, image, price, category, description, rating } = product;
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const fetchProductsDetail = async () => {
    setIsLoading(true);
    let res = await axios
      .get("https://fakestoreapi.com/products/" + productId)
      .catch((error) => console.log(error));
    dispatch(selectedProducts(res.data));
    setIsLoading(false);
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductsDetail();
    }
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);
  return isLoading ? (
    <Loading />
  ) : (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%", height: "auto" }} src={image} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ pt: 10 }}>
            <Typography mb={1} color="text.primary" variant="h3">
              {title}
            </Typography>
            <Typography mb={1} color="primary" fontSize={36}>
              {price}₺
            </Typography>
            <Box display="flex" gap=".5rem" alignItems="center">
              <Rating name="read-only" value={rating?.rate} readOnly />
              <Typography color="text.secondary" variant="body2">
                {rating?.count} yorum
              </Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box mb={3}>
              <Typography color="text.secondary" variant="overline">
                KATEGORİ
              </Typography>
              <br />
              <Chip label={category} />
            </Box>
            <Box mb={3}>
              <Typography color="text.secondary" variant="overline">
                AÇIKLAMA
              </Typography>
              <Typography color="text.primary" variant="body1">
                {description}
              </Typography>
            </Box>
            <Button disableElevation variant="contained">
              SEPETE EKLE
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
