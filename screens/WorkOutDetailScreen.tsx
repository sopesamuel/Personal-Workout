import { View, StyleSheet, Alert, Button, Text} from "react-native";
import { Poppins } from "../components/FontsChildren/Poppins";
import { useWorkoutBySlug } from "../hooks/useWorkOutBySlug";
import { PressableText } from "../components/PressableText";
import { ModalMain } from "../components/Modal";
import { formatSec } from "../utils/SecondsMin";

export default function WorkOutDetailsScreen({route} : any){

    // const { name } = route.params;
    const workout = useWorkoutBySlug(route.params.slug);

    if (!workout) {
        return null;
      }

    return(
        <View style={styles.container}>
            <Poppins>{workout.name}</Poppins>
            <ModalMain 
             activator={({handleOpen}) => 
                <PressableText text="Check wo" onPress={handleOpen}/>
            }>
                {
                    workout.sequence.map(on =>
                    <Text key={on.slug}>
                        {on.name} | {on.type} | {formatSec(on.duration)}
                    </Text>
                    )
                }
            </ModalMain>

        </View>
    )
}


const styles = StyleSheet.create({
    centerView:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    container:  {
        padding: 20,
        flex: 1
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        fontFamily: "Poppins-Bold"
    }
})