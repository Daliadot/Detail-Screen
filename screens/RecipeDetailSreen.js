import { View, Text,ScrollView, TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { CachedImage } from '../helpers/image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ChevronDoubleLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function RecipeDetailScreen(props) {
    let item = props.route.params;
    const [isFavourite, setIsFavourite] = useState(false);
    const navigation = useNavigation();

    useEffect(()=>{
        getMealdata(item.idMeal);
    },[])

    const getMealdata = async (id)=>{
        try{
          const response = await axios.get('https://themealdb.com/api/json/v1/1/lookup.php?i=${id}');
          console.log('got meal data: ', response.data);
          //console.log('got recipes: ', response.data);
          //if(response && response.data){
            //setMeals(response.data.meals);
        //  }
        }catch(err){
          console.log('error',err.message);
        }
      }

    return (
        <ScrollView
            className="bg-white flex-1"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddibgBottom: 30}}
        >
            <StatusBar barStyle={"light"} />
            {/* recipe image */}
            <View className="flex-row justify-center">
                <CachedImage
                    uri={item.strMealThumb}
                    style={{widht: wp(98), heigh: hp(50), borderRadius: 53, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, margintTop: 4}}
                    />
            </View>

            {/* back button */}
            <View className="w-full absolute flex-row justify-between items-center pt-14">
                <TouchableOpacity onPress={()=>navigation.goback()} className="p-2 rouded-full ml-5 bg-white">
                    <ChevronDoubleLeftIcon size={hp(3.5)} strokeWidth={4.5} color='#fbbf24' />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> setIsFavourite(!isFavourite)} className="p-2 rouded-full ml-5 bg-white">
                    <HeartIcon size={hp(3.5)} strokeWidth={4.5} color={isFavourite? "red": "gray"} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}