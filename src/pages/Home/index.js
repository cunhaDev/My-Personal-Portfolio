import React from 'react';
import {View, Image, Text} from 'react-native';
import HeaderHome from '../../assets/headerPerfil.png';
import styles from './style';
export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={HeaderHome} style={styles.header} />
      <View style={styles.ViewDescription}>
        <Text style={styles.TextDescription}>
          Olá, me chamo Mateus, tenho 20 anos e sou estudante de nível Superior
          em Analise e desenvolvimento de Sistemas, Programador Back-End Junior,
          caminhando para FullStack Pleno com as tecnologias Javacript, Node.js,
          React.js e React Native. Apaixonado pelo desenvolvimento Móbile, Mas
          sempre trazendo comigo o desenvolvimento Web, Iniciando os estudos em
          Ui/Ux Designer para aperfeiçoar ainda mais meus projetos.
          Conhecimentos básicos em Git e GitHub, formado em Técnico em
          Informática para Internet pelo Instituto Federal de Educação, Ciência
          e Tecnologia do amazonas.
        </Text>
      </View>
    </View>
  );
}
