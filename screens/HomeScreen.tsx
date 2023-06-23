import { Text, View, StyleSheet, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/Index";
import data from '../Data.json';
import { Workout } from "../types/Data";
import WorkOuutItem from "../components/WorkOutItem";
import { Poppins } from "../components/FontsChildren/Poppins";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function HomeScreen({navigation}: Props){

 
    return(
        <View style={styles.container}>
            {/* <Text>{ JSON.stringify(data) }</Text> */}
            <Text style={styles.header}>New Workout</Text>
            <Poppins>Testing Children Fonts</Poppins>
        <FlatList 
            data={data as Workout[]}
            renderItem={WorkOuutItem}
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