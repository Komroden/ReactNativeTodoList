import React,{useState} from 'react';
import {View, StyleSheet,Button, TextInput,Alert} from "react-native";


export const AddTodo = ({setMessage}) => {
    const [newTodo,setNewTodo]=useState('')
    const addTodo=(title)=>{
        if(newTodo.trim()){
            setMessage(prev=>[...prev,{
                id:Date.now().toString(),
                title:newTodo
            }])
            setNewTodo('')
        }else {
            Alert.alert('Название тела не может быть пустым')
        }

    }

    return (
        <View style={styles.wrapper}>
            <TextInput style={styles.input} onChangeText={setNewTodo}
            value={newTodo}
            placeholder='Введите название дела...'
            autoCapitalize='none'
            />
            <Button  title='Добавить' onPress={addTodo}/>

        </View>
    );
};
// autoCorrect={false} - убирает T9 у инпута
// autoCapitalize='none' - убирает с заглавной буквы

const styles = StyleSheet.create({
    wrapper: {
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
        marginBottom:20

    },
    input:{
       width:'70%',
        padding:10,
        borderStyle:'solid',
        borderBottomWidth:2,
        borderBottomColor:'#3949ab',

    },

});