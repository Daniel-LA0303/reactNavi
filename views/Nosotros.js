import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
const Nosotros = ({navigation, route}) => {


    const {clienteId,totalpagar } = route.params;

    // console.log(route);

    const visitarInicio = () => {
        navigation.navigate('Inicio'); //OPCION 1 PARA REGRESAR
        // navigation.goBack(); //OPCION 2
        // navigation.push('Inicio'); //OPCION 3
    }
    return (  
        <View style={styles.contenedor}>
            <Text>Nosotros</Text>
            <Text>{clienteId}</Text>
            <Text>{totalpagar}</Text>
            <Button 
                title='Volver'
                
                onPress={() => visitarInicio()}
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
export default Nosotros;