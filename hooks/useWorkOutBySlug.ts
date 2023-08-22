import { useEffect, useState } from "react";
import { Workout } from "../types/Data";
import { getWorkoutbySlug } from "../storage/Workout";

export const useWorkoutBySlug = (slug: string) => {

  const [workout, setWorkout] = useState<Workout>();

  useEffect(() => {
    async function getData() {
      const _workout = await getWorkoutbySlug(slug);
      setWorkout(_workout);
    }

    getData();
  }, [])

  return workout;
}