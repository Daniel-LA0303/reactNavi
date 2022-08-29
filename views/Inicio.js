import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
const Inicio = ({navigation}) => {

    const informacion = {
        clienteId: 20,
        totalpagar: 500
    }

    const visitarNosotros = () => {
        navigation.navigate('Nosotros',informacion); //PASAMOS EL OBJETO "iinformacion"
    }

    return (  
        <View style={styles.contenedor}>
            <Text>Inicio h</Text>
            <Button 
                title='Ir a nosotros'
                onPress={() => visitarNosotros()}
            />
        </View>
    );
}
 
const styles = StyleSheet.create({
    contenedor:{
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center' 
    }
});
export default Inicio;