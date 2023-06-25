import { useEffect, useState } from "react";
import * as Font from 'expo-font';
import { getData, storeData, containData } from "../storage/Index";
import data from "../Data.json"


export default function useCachedResources(){
    const [isLoaded, SetisLoaded] = useState(false);

    useEffect(() =>
    {
        async function loadedResources(){
                try {
                   const availKey = await containData("workout-data");
                   if(!availKey){
                    console.log("Available")
                    await storeData("workout-data", data)
                   }

                   await Font.loadAsync({
                        "Poppins" : require('../assets/fonts/Poppins-Medium.ttf'),
                        "Poppins-Bold": require('../assets/fonts/Poppins-Bold.ttf'),
                        "Poppins-SemiBold": require('../assets/fonts/Poppins-SemiBold.ttf')
                    })
                } catch (e) {
                    console.warn(e)
                } finally{
                   const list = await getData("workout");
                   console.log(list)
                    SetisLoaded(true)
                } 
        }
        loadedResources()

    }, [])

    return isLoaded;

}