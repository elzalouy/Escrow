import AsyncStorage from '@react-native-async-storage/async-storage';

export const getItem=async(item)=>{
    const Item=await AsyncStorage.getItem(item);
    return await Item;
}
export const setItem=async (item)=>{
    await AsyncStorage.setItem(item.key,item.value);
}
export const removeItem=async (item)=>{
    await AsyncStorage.removeItem(item);
}