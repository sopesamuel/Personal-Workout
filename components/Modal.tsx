import { Modal, View, StyleSheet  } from "react-native"
import { PressableText } from "./PressableText"
import { FunctionComponent, useState } from "react"


type ModalProps = {
    activator: FunctionComponent<
    {
        handleOpen: () => void
    }
    >,
    children: any
}
export function ModalMain({ activator : Activator, children } : ModalProps){

    const [modalVisible, setModalVisible] = useState(false)

    return(
        <>
        <Modal visible={modalVisible}>
            <View style={styles.centerView}>
                {children}
            </View>
        </Modal>
        <PressableText text="Check Sequence" onPress={() => setModalVisible(true)}/>
        {
            Activator ? 
            <Activator handleOpen={() => setModalVisible(true)}/> :
            <PressableText text="Checker two" onPress={() => alert("Checker Complete")}/>
        }
        </>
    )
}


const styles = StyleSheet.create({
    centerView:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})