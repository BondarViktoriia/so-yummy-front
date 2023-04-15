import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { fetchAllCategories } from 'services/api/apiRecipe';

import { Loader } from '../Loader/Loader';

const CategoryList = () => {
  const { categoryName: category } = useParams();
  const [tabValue, setTabValue] = useState(0);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllCategories() {
      try {
        setIsLoading(true);
        const { categoriesList } = await fetchAllCategories();
        // console.log(categoriesList);
        setCategories(categoriesList);
        if (category) {
          const categoryCapitalize =
            category[0].toUpperCase() + category.slice(1);
          const indexOfCategory = categoriesList.indexOf(categoryCapitalize);
          if (indexOfCategory > 0) setTabValue(indexOfCategory);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getAllCategories();
    // console.log(category);
  }, [category]);

  useEffect(() => {
    if (categories.length > 0) {
      const lowerCaseCategory = categories[tabValue].toLowerCase();
      navigate(`/categories/${lowerCaseCategory}`);
    }
  }, [categories, navigate, tabValue]);

  const handleChange = (event, newCategory) => {
    navigate(`/categories/${event.target.textContent}`);
    setTabValue(newCategory);
  };

  return (
    <>
      {isLoading && <Loader />}
      <div>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          sx={{
            marginTop: '50px',
            marginLeft: '10px',
            marginRight: '10px',

            '@media (min-width: 768px)': {
              marginTop: '72px',
              marginLeft: '25px',
              marginRight: '25px',
            },
            '@media (min-width: 1440px)': {
              marginTop: '100px',
              marginLeft: '100px',
              marginRight: '100px',
            },

            '& .MuiTabs-scroller': {
              '& .css-1aquho2-MuiTabs-indicator': {
                backgroundColor: '#8BAA36',
              },
              '& .css-ttwr4n': { backgroundColor: '#8BAA36' },
              transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            },
            '& .MuiTabs-flexContainer': {
              transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
              gap: '28px',
              '@media (min-width: 768px)': {
                gap: '55px',
              },
              '& :hover': {
                color: '#8BAA36',
              },
            },

            '& .MuiTab-root': {
              textTransform: 'capitalize',
              minWidth: 'unset',
              fontSize: '18px',
              fontFamily: 'Poppins',
              fontWeight: '400',
              lineHeight: '18px',
              borderColor: '#8BAA36',
              transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            },

            '& svg': {
              opacity: 0.8,
              stroke: '#8BAA36',
              strokeWidth: '3px',
              transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            },
          }}
        >
          {categories.map((category, idx) => {
            return (
              <Tab
                label={category.toLowerCase()}
                key={idx}
                sx={{
                  padding: '0',
                  color: '#BDBDBD',
                  '&.Mui-selected': {
                    color: '#8BAA36',
                  },
                }}
              />
            );
          })}
        </Tabs>
      </div>
    </>
  );
};

export default CategoryList;
