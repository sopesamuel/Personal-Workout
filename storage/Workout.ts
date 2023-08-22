import { containData, getData, storeData, removeData } from "./Index";
import data from "../Data.json"
import { Workout } from "../types/Data";


export const availableData = async (): Promise<boolean> => {
    const availKey = await containData("workout-data");
    if(!availKey){
     console.log("Available")
     await storeData("workout-data", data)
     return true
    }
    return false
}

export const getAvailableData = async (): Promise<Workout[]> => {
    const list = await getData("workout-data");
    console.log(list);
    return list;
}


export const getWorkoutbySlug = async (slug: string): Promise<Workout> => {
    const workout = await getAvailableData();
    const work = workout.filter((w) => w.slug === slug)[0];
    return work;
}


export const removedData = async () => {
    await removeData("workout-data");
    console.log("done")
}

