import React from 'react';
import { view, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import { styles } from './CastroLojaStyles';
import { useCadastroLoja } from '../../hooks/useCadastroLoja';
import {keyboardAvoidingView} from 'react-native/types_generated/index';
import {ScrollView, TextInput} from 'react-native-gesture-handler';


export default function CadastroLoja() {
  const { formData, updateField, handleSalvar } = useCadastroLoja();

  return (
    <KeyboardAvoidingView
      style={styles.container}
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
          placeholder="Ex: Categoria"
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
          placeholder="Ex: https://link-da-imagem.com/imagem.jpg"
          keyboardType="url"
          autoCapitalize="none"
          value={formData.imagem}
          onChangeText={(v) => updateField('imagem', v)}
        />

        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Escreva uma descrição do local"
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
