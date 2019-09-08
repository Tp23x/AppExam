import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  
} from 'react-native';
import ReadMore from 'react-native-read-more-text';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Image resizeMode = 'center' style = {{width:100,height:100}} source={require('./pages/s.png')} />
        <View style={styles.card}>
          <ReadMore
            numberOfLines={2}
            onReady={this._handleTextReady}>
            <Text style={styles.cardText}>
            The School of Engineering and Resources, Walailak University was established in 1998. It is located in Nakhon Si Thammarat province in the upper South of Thailand. Currently, the school offers both undergraduate and Science For undergraduate programs, there are 5 Bachelors of Engineering and 2 Bachelors of Science available
            </Text>{'\n'}
            <Text style={styles.cardText}>
            - Chemical and Process Engineering
             </Text>{'\n'}
            <Text style={styles.cardText}>
            - Civil Engineering  
            </Text>{'\n'}
            <Text style={styles.cardText}>
            - Computer Engineering  
            </Text>{'\n'}
            <Text style={styles.cardText}>
            - Electrical Engineering  
            </Text>{'\n'}
            <Text style={styles.cardText}>
            - Polimer Engineering  
            </Text>{'\n'}
            
           
          </ReadMore>
        </View>
        
      </View>
    );
  }

  _handleTextReady = () => {
    console.log('ready!');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCCCC',
    alignItems: 'center',
    //margin:10,

    paddingTop:30,
    justifyContent: 'center',
  },
  card: {
    
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 3,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  cardText: {
    fontSize: 14,
  },
});