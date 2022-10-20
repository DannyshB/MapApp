import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default function App() {
  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffff'
    }}>
      <View>
        <Text style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#20315f'}}>
            Let's begin your journey!
        </Text>
      </View>
      <TouchableOpacity style={{
        backgroundColor:'#AD70AF', 
        padding:20, width: '90%', 
        borderRadius:5, 
        flexDirection: 'row', 
        justifyContent:'space-between'}}>
        <Text style={{fontWeight: 'bold',
         fontSize:18,
         color: '#fff'}}>Let's Go</Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}


