import React from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Skeleton, Tooltip, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ isLoading }) => {
    let navigate = useNavigate();
    const products = useSelector((state) => state.allProducts.products);

    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <Grid key={id} item xs={6} sm={4} md={3} >
                <Card onClick={() => navigate("/product/" + id)
                } sx={{ height: "100%" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={image}
                            alt={title}
                            height="250"
                            sx={{
                                objectFit: "contain"
                            }}
                        />
                        <CardContent>
                            <Tooltip title={title}>
                                <Typography sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} gutterBottom variant="h6" component="div">
                                    {title}
                                </Typography>
                            </Tooltip>
                            <Box display="flex" justifyContent="space-between" alignItems="center" gap={2}>
                                <Typography variant="body2" color="text.secondary">
                                    {category}
                                </Typography>
                                <Typography variant="body2" color="primary">
                                    <b>
                                        {price}₺
                                    </b>
                                </Typography>
                            </Box>
                        </CardContent>
                    </CardActionArea>
                </Card >
            </Grid >
        )
    });

    const LoadingCard = () => {
        let fakeData = []
        for (let i = 0; i < 12; i++) {
            fakeData.push(i)
        }
        return (
            fakeData.map(val => (
                <Grid key={val} item xs={6} sm={4} md={3} >
                    <Card>
                        <Skeleton sx={{ height: 250 }} animation="wave" variant="rectangular" />
                        <CardContent>
                            <Skeleton animation="wave" height={30} width="80%" />
                            <Skeleton animation="wave" height={15} />
                        </CardContent>
                    </Card >
                </Grid >
            )
            )
        )
    };

    return (
        isLoading ?
            <LoadingCard /> :
            renderList
    );
};

export default ProductCard;