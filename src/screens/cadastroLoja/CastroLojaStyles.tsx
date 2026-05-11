import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7', // Um cinza bem claro para destacar os inputs brancos
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40, // Espaço extra no final para não grudar no teclado
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000', // Sombra leve para profundidade (iOS)
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, // Sombra para Android
  },
  textArea: {
    height: 100, // Altura maior para a descrição
    textAlignVertical: 'top', // Garante que o texto comece no topo no Android
  },
  button: {
    backgroundColor: '#007AFF', // Azul padrão iOS moderno
    borderRadius: 10,
    padding: 16,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});