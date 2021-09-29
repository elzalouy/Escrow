import AsyncStorage from '@react-native-async-storage/async-storage';

export const getItem=async(item)=>{
    const Item=await AsyncStorage.getItem(item);
    return Item;
}
export const setItem=async (item)=>{
    await AsyncStorage.setItem(item.key,item.value);
}
export const setItems=async (items)=>{
        await AsyncStorage.multiSet(items);
}
export const removeItem=async (item)=>{
    await AsyncStorage.removeItem(item);
}