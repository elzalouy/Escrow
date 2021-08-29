import {useNetInfo} from '@react-native-community/netinfo';

export default function(){
    const connect = useNetInfo();
    return {isConnected:connect.isConnected,isInternet:connect.isInternetReachable};
}