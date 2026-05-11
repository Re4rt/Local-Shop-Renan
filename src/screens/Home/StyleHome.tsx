import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 20,
    color: '#333',
  },
  list: {
    paddingHorizontal: 20,
  },
  
  buttonCadastro: {
  position: 'absolute',
  right: 20,
  bottom: 30,
  width: 60,
  height: 60,
  borderRadius: 30,
  backgroundColor: '#27ae60',
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 5,         
  zIndex: 10,           
  shadowColor: '#000',
  
},
  buttonText: {
    color: '#fff',
    fontSize: 32,
    lineHeight: 34,
  }
});

export default styles;