import React from 'react';
import { View, FlatList, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { useLojas } from '../../hooks/useLojas';
import LojaCard from '../../components/LojaCard';


import { styles } from './StyleHome'; 

export default function HomeScreen() {
  const { lojas, loading } = useLojas();
  const navigation = useNavigation();

  if (loading) return <ActivityIndicator size="large" color="#27ae60" style={{ flex: 1 }} />;

  return (
  <View style={styles.container}>
    
    <FlatList 
      data={lojas}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <LojaCard loja={item} />}
      contentContainerStyle={{ paddingBottom: 100 }} 
    />

    
    <TouchableOpacity 
      style={styles.buttonCadastro} 
      onPress={() => navigation.navigate('Cadastro' as never)}
    >
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>

  </View>
);
}