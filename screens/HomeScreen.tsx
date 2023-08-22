import { Text, View, StyleSheet, FlatList, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/Index";
import WorkOuutItem from "../components/WorkOutItem";
import { Poppins } from "../components/FontsChildren/Poppins";
import { useWorkout } from "../hooks/useWorkouts";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function HomeScreen({navigation}: Props){

    const workouts = useWorkout();

 
    return(
        <View style={styles.container}>
            {/* <Text>{ JSON.stringify(data) }</Text> */}
            <Text style={styles.header}>New Workout</Text>
            <Poppins>Testing Children Fonts</Poppins>
        <FlatList 
            data={workouts}
            renderItem={({item}) => {
                return(
                    <Pressable onPress={() => navigation.navigate("WorkOut", {slug: item.slug, name : item.name } as any)}>
                        <WorkOuutItem item={item} />
                    </Pressable>
                )
            }}
            keyExtractor={(item)  => item.slug}
        />
        </View>
    )
}

const styles = StyleSheet.create({
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