import React from 'react';
import { StyleSheet, Text, Button, TextInput, View } from 'react-native';

export default class WeatherProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '-',
        description: '-',
        temp: 0
      }
    };
  }

  getWeather= () => {
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=5cac9cd6f8b6e74ef26c9cdbfd9d8320&units=metric';
  fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
    this.setState({
      forecast: {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp
      }
    });
  });
}


  render() {
    return (
    <View style={styles.containerMain}>
      <View style={styles.box1}>
          <Text style={{ textAlign: 'center', padding: 30, fontSize: 25, color: 'black' }}>
          Prakiraan Cuaca</Text>
      </View>
      <View style={styles.box2}>
           <Text style={{ textAlign: 'center', paddingTop: 15, fontSize: 20 }}>
            Masukan Nama Kota </Text>
           <TextInput
                 style={{ height: 50, color: 'black' }}
                 placeholder=" Masukan Nama kota "
                 onChangeText={(city) => this.setState({ city })}
           />
             <Button
               onPress={() => this.getWeather()}
               title="Cari"
               color="#006400"
               accessibilityLabel="Klik untuk melihat cuaca"
             />
       </View>
       <View style={styles.box3}>
        <Text style={{ padding: 10, fontSize: 20 }}>
          Kota : {this.state.city} {'\n'}
          Temp : {this.state.forecast.temp} {"'Celcius"}{'\n'}
          Cuaca : {this.state.forecast.main} {'\n'}
          Description : {this.state.forecast.description} {'\n'}
        </Text>
      </View>
      <View style={styles.box4}>
          <Text style={{ textAlign: 'center', padding: 18, fontSize: 14 }} >
          CopyRight yunitami@App</Text>
      </View>
</View>
    );
  }
}


const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#2F4F4F',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    height: 80,
    backgroundColor: '#3CB371',
  },
  box2: {
     flex: 1,
     backgroundColor: '#008B8B',
     marginLeft: 10,
     marginRight: 10,
     flexDirection: 'column',
     justifyContent: 'space-around',
   },
  box3: {
    flex: 1,
    backgroundColor: '#008B8B',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row'
  },
  box4: {
    height: 60,
    backgroundColor: '#3CB371',
  },
  button: {
    width: 50,
    height: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  textBoxStyle: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    backgroundColor: 'white'
  }

});
