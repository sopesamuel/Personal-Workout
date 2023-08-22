import { useState, useEffect } from "react";
import { getAvailableData } from "../storage/Workout";
import { Workout } from "../types/Data";
import { useIsFocused } from "@react-navigation/native";

export const useWorkout = () => {
    
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const isFocused = useIsFocused();

    console.log(isFocused)

    useEffect(() => {
        async function getNewData(){
            const _workout = await getAvailableData();
            setWorkouts(_workout)
        }
        if(isFocused){
            getNewData();
        }
    },[isFocused])

    return workouts;
}