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
    try {
        const Keys = await AsyncStorage.getAllKeys();
       return Keys.includes(key);
    } catch(e: any){
        console.error(e.message);
    }
}


export const removeData = async (key: string) => {
  try {
       await AsyncStorage.removeItem(key);
  } catch(e: any){
      console.error(e.message);
  }
}