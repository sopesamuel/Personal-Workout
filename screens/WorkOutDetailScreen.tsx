import { View, StyleSheet, } from "react-native";
import { Poppins } from "../components/FontsChildren/Poppins";


export default function WorkOutDetailsScreen({route} : any){

    const { name } = route.params;
    
    return(
        <View style={styles.container}>
            <Poppins>Slug - {name}</Poppins>
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