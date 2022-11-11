import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import DvrIcon from '@mui/icons-material/Dvr';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import useStyles from './styles';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import SpaIcon from '@mui/icons-material/Spa';
import { useSubmit } from '../../hooks/useSubmit';
import { CircularProgress } from '@mui/material';

const Categories = () => {
  const classes = useStyles();
  const [categories, setCategories] = useState([]);

  const getIcon = (icon)=> {
    console.log({icon});
    switch (icon) {
      case 'DvrIcon':
        return <DvrIcon/>
      case 'SpaIcon':
        return <SpaIcon/>
      case 'CoffeeMakerIcon':
        return <CoffeeMakerIcon/>
      case 'FormatPaintIcon':
        return <FormatPaintIcon/>
      case 'PhoneAndroidIcon':
        return <PhoneAndroidIcon/>
      case 'CheckroomIcon':
        return <CheckroomIcon/>
      default:
        return <CheckroomIcon/>
    }
  }
  const {
    isLoading: loadingGetCategories,
    isSuccess: successGetCategories,
    data: categoriesData,
    mutate: mutateGetCategories,
  } = useSubmit({
    path: `/categories`,
    method: 'get',
  });

  React.useEffect(() => {
    mutateGetCategories({});
  }, []);

  React.useEffect(() => {
    if (successGetCategories) {
      console.log('categoriesData?.data', categoriesData?.data);
      setCategories(categoriesData?.data?.categories);
    }
    // setCategories([
    //   { name: 'Electronics', icon: <DvrIcon /> },
    //   { name: 'Cosmetics', icon: <SpaIcon /> },
    //   { name: 'Home appliances', icon: <CoffeeMakerIcon /> },
    //   { name: 'Home and Garden', icon: <FormatPaintIcon /> },
    //   { name: 'Communication', icon: <PhoneAndroidIcon /> },
    //   { name: 'Mode', icon: <CheckroomIcon /> },
    // ]);
  },[categoriesData?.data]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleCategoryClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.Cards}>
      {loadingGetCategories ? (
        <CircularProgress />
      ) : (
        categories.map((category, index) => (
          <Card
            variant="outlined"
            className={classes.Card}
            style={{
              backgroundColor: `${
                selectedIndex === index ? '#EEE494' : 'white'
              }`,
              cursor: 'pointer',
            }}
            onClick={() => handleCategoryClick(event, index)}
            key={index}
          >
            <CardActions>{getIcon(category?.icone)}</CardActions>
            <CardContent>
              <Typography
                sx={{ fontSize: 16, fontWeight: 'bold' }}
                color="text.primary"
              >
                {category?.title}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};
export default Categories;
