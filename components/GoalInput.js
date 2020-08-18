import React from 'react';

import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
    return(
        <View style={styles.inputContainer}>
        <TextInput 
            placeholder='Course Goal' 
            style={styles.input}
            onChangeText={props.onChange}
            value={props.goalValue}
        />
        <Button title="ADD [+]" onPress={props.onPress}/>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    input:{
        borderColor: 'black', 
        borderWidth: 2, 
        padding: 8, 
        width: '80%'
    }, 
})


export default GoalInput;