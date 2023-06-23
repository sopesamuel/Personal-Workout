import { Text, View, StyleSheet, FlatList } from "react-native";


export function Poppins({children}: any){
    return(
        <Text style={{fontFamily: "Poppins", marginBottom: 10}}>
            {children}
        </Text>
    )
}