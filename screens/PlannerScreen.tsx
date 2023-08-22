import {Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/Index";

type Props = NativeStackScreenProps<RootStackParamList, 'Planner'>;

export default function PlannerScreen({navigation}: Props){

    return(
        <View>
            <Text>I am PlannerScreen</Text>
        </View>
    )
}