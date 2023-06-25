// import AsyncStorage from "@react-native-async-storage/async-storage";



// export const setData = async (key: string, value : any) => {
  
//     try{
//         const data = JSON.stringify(value);
//         await AsyncStorage.setItem(key, data)
//    } catch(e: any){
//     console.warn(e.message)
//    }
// }

// export const getData = async (key: string) => {
//     try{
//         const StingValue = await AsyncStorage.getItem(key)
//         if(StingValue !== null){
//            const newValue = JSON.parse(StingValue);
//             return newValue;
//         }
//    } catch(e: any){
//     console.warn(e.message)
//    }
// }


import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: any) => {
  try {
    const stringValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, stringValue);
  } catch (e: any) {
    console.error(e.message);
  }
}

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      const data = JSON.parse(value);
      return data;
    }
  } catch (e: any) {
    console.error(e.message);
  }
}

export const containData = async (key: string) => {
    try{
        const Keys = await AsyncStorage.getAllKeys();
       return Keys.includes(key);
    } catch(e: any){
        console.error(e.message);
    }
}