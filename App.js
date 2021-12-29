import React,{useState} from "react";
import { View,StyleSheet,ScrollView,FlatList } from 'react-native';
import {Navbar} from "./src/components/Navbar/Navbar";
import {AddTodo} from "./src/components/addTodo/AddTodo";
import {TodoItem} from "./src/components/TodoItem/TodoItem";





export default function App() {
  const [todo,setTodo]=useState([])
    const removeTodo=id=>{
      setTodo(prev=>prev.filter(item=>item.id!==id))
    }
  return (
    <ScrollView >
        <Navbar title={'Todo app'}/>
        <View style={styles.container}>
        <AddTodo setMessage={setTodo}/>
        <FlatList data={todo} renderItem={({item})=><TodoItem todo={item} onRemove={removeTodo} />} keyExtractor={item=>item.id} />
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:30,
    paddingVertical:20

  },

});
