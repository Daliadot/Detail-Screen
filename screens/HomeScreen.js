import { View, Text, ScrollView, Image, TextInput, StatusBar} from "react-native";
import React, { useEffect, useState } from 'react';
import {StatusBar} from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {BellIcon, MagifyingGlassIcon} from 'react-native-heroicons/outline';
import Categories from '../components/categories';
import axios from 'axios';
import Recipes from '../components/recipes';
export default function HomeScreen() {
 
  const [activeCategory, setActiveCategory] = useState('Beef');
  const [categories, setCategories] = useDtate([]);
  const [meals, setMeals] = useState([]);

  useEffect(()=>{
    getcategories();
    getRecipes();
  }, [])
  
  const handleChangecategory = category=>{
    getRecipes(category);
    setActiveCategory(category);
    setMeals([]);
  }

  const getCategories =async ()=>{
    try{
      const response = await axios.get('https://thmealdb.com/api/v1/1/categories.php');
      // console.log{'got categories: ', response.data};
      if(response && response.data){
        setCategories(response.data.categories);
      }
    }catch(err){
      console.log('error: ',err.meals);
    }
  }
  const getRecipes = async (category="beef")=>{
    try{
      const response = await axios.get('https//themealdb.com/api/json/v1/1/filter.php?c=${category}');
      //console.log('got recipes: ', response.data);
      if(response && response.data){
        setMeals(response.data.meals);
      }
    }catch(err){
      console.log('error',err.message);
    }
  }
}