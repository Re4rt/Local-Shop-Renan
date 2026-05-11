import React from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';

import { styles } from './CastroLojaStyles';
import { useCadastroLoja } from '../../hooks/useCadastroLoja';

export default function CadastroLoja() {
  const { formData, updateField, handleSalvar } = useCadastroLoja();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      // Ajuste de comportamento para o teclado não cobrir o input
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Cadastrar Local</Text>

        <Text style={styles.label}>Nome do Local *</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Café Central"
          value={formData.nome}
          onChangeText={(v) => updateField('nome', v)}
        />

        <Text style={styles.label}>Categoria *</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Restaurante"
          value={formData.categoria}
          onChangeText={(v) => updateField('categoria', v)}
        />

        <Text style={styles.label}>Distância *</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 500m"
          value={formData.distancia}
          onChangeText={(v) => updateField('distancia', v)}
        />

        <Text style={styles.label}>URL da Imagem</Text>
        <TextInput
          style={styles.input}
          placeholder="https://link-da-imagem.com"
          keyboardType="url"
          autoCapitalize="none"
          value={formData.imagem}
          onChangeText={(v) => updateField('imagem', v)}
        />

        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Escreva uma descrição"
          value={formData.descricao}
          onChangeText={(v) => updateField('descricao', v)}
          multiline
        />
        
        <TouchableOpacity style={styles.button} onPress={handleSalvar}> 
            <Text style={styles.buttonText}>Salvar Local</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}