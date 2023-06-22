import { StyleSheet, Text, View } from "react-native";
import { Workout } from "../types/Data";



export default function WorkOuutItem({item}: {item: Workout}) {
    return(
    <View style={style.container}>
        <Text style={style.name}>{item.name}</Text>
        <Text style={style.duration}>Duration - {item.duration}</Text>
        <Text style={style.difficulty}>Difficulty - {item.difficulty}</Text>
    </View>
    )
}

const style = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderColor: "rgba(0,0,0,0.1)",
        borderWidth: 2,
        padding: 10,
        marginBottom: 10,
    },
    name:{
        fontSize: 15,
        fontWeight: "bold",

    },
    duration:{
        fontSize: 15,

    },
    difficulty:{
        fontSize: 15,
    }
})