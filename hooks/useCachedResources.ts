import { useState, useEffect } from "react"
import *  as Font from "expo-font";



export default function useCachedResource(){

     const [isLoaded, setIsloaded] = useState(false)

     useEffect(() => {
        async function loadedResourcesAsync() {
            // setTimeout(() => {setIsloaded(true)}, 1000)
            try {
                await Font.loadAsync({
                    "Poppins" : require("../assets/fonts/Poppins-Medium.ttf"),
                    "Poppins-Bold" : require("../assets/fonts/Poppins-Bold.ttf"),
                    "Poppins-SemiBold" : require("../assets/fonts/Poppins-SemiBold.ttf")
                })
            } catch(e){
                console.warn(e)
            } finally{
                setIsloaded(true)
            }
        }
        loadedResourcesAsync();
     }, [])
     
     return isLoaded;
}