import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
//import HeaderHome from '../../assets/headerHome.png';
import styles from './style';
import api from '../../services/api';
export default function Projetcs() {
  const [repo, setRepo] = useState([]);
  useEffect(() => {
    async function loadRepositorys() {
      const response = await api.get('/users/cunhadev/repos');
      setRepo(response.data);
    }
    loadRepositorys();
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.projetcsList}>
        {repo.map((repos) => (
          <View style={styles.projetcs}>
            <Text style={styles.name}>{repos.name}</Text>
            <Text style={styles.description}>{repos.description}</Text>
            <TouchableOpacity style={styles.botton}>
              <Text style={styles.bottonText}>ver mais detalhes</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
