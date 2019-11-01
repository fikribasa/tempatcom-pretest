import React, {Component} from 'react';
import data from './data';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Card, ListItem, Button} from 'react-native-elements';
import CardContainer from './Components/cardContainer';
import Icon from 'react-native-vector-icons/Entypo';
import {AreaChart} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import styles from './Styles';

import {
  Circle,
  Path,
  Text as SVGText,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

const Gradient = () => (
  <Defs key={'gradient'}>
    <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
      <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'} />
      <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'} />
    </LinearGradient>
  </Defs>
);
const Decorator = ({x, y, data}) => {
  return data.map((value, index) => (
    <View>
      {index === 0 ? (
        <View>
          <Circle
            key={index}
            cx={x(index) + 30}
            cy={y(value + 3)}
            r={6}
            fill={'blue'}
          />
          <SVGText
            fill="purple"
            fontSize="10"
            x={x(index) + 30}
            y={y(value + 7)}
            textAnchor="middle">
            {value}%
          </SVGText>
          <SVGText
            fill="purple"
            fontSize="10"
            x={x(index) + 30}
            y={y(value - 4)}
            textAnchor="middle">
            {index % 2 === 0 ? '09:00-12.00' : '13:00-16:30'}
          </SVGText>
        </View>
      ) : index == 2 ? (
        <View>
          <Circle
            key={index}
            cx={x(index) - 30}
            cy={y(value + 3)}
            r={6}
            fill={'blue'}
          />
          <SVGText
            fill="purple"
            fontSize="10"
            x={x(index) - 30}
            y={y(value + 7)}
            textAnchor="middle">
            {value}%
          </SVGText>

          <SVGText
            fill="purple"
            fontSize="10"
            x={x(index) - 30}
            y={y(value - 4)}
            textAnchor="middle">
            {index % 2 === 0 ? '09:00-12.00' : '13:00-16:30'}
          </SVGText>
        </View>
      ) : (
        <View>
          <Circle key={index} cx={x(index)} cy={y(value)} r={6} fill={'blue'} />
          <SVGText
            fill="purple"
            fontSize="10"
            x={x(index)}
            y={y(value + 5)}
            textAnchor="middle">
            {value}%
          </SVGText>

          <SVGText
            fill="purple"
            fontSize="10"
            x={x(index)}
            y={y(value - 7)}
            textAnchor="middle">
            {index % 2 === 0 ? '09:00-12.00' : '13:00-16:30'}
          </SVGText>
        </View>
      )}
    </View>
  ));
};

const Line = ({line}) => (
  <Path d={line} stroke={'rgba(134, 65, 244)'} fill={'none'} />
);

const foodBeveragesList = data.FoodBeverages;

export default class App extends Component {
  renderCard(item) {
    return (
      <Card key={item.id} containerStyle={styles.card}>
        <ImageBackground
          source={{uri: item.uri}}
          style={{width: '100%', height: 150, justifyContent: 'space-between'}}
          resizemode="center">
          <View style={styles.imageTop}>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={16} color="yellow" />
              <Text style={{marginLeft: 3, color: 'white'}}>{item.rating}</Text>
            </View>
            <TouchableOpacity
              style={{justifyContent: 'center', alignItems: 'center'}}>
              {item.wishlist === 'true' ? (
                <Icon name="heart" size={20} color="red" />
              ) : (
                <Icon name="heart-outlined" size={20} color="white" />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                backgroundColor: 'orange',
                paddingRight: 20,
                borderTopRightRadius: 100,
              }}>
              <Text style={{color: 'white', marginLeft: 8}}>
                {item.category}
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View style={{marginLeft: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>{item.branch}</Text>
          <Text style={{color: '#a7a9ab'}}>{item.address}</Text>
          <Text style={{marginBottom: 5}}>{item.price}</Text>
        </View>

        {/* ----------------------- Line Chart --------------------------------------*/}
        <AreaChart
          style={{height: 48}}
          data={item.rate}
          curve={shape.curveNatural}
          svg={{fill: 'rgba(134, 65, 244, 0.2)'}}
          contentInset={{top: 20, bottom: 10}}>
          <Line />
          <Decorator />
        </AreaChart>

        <View style={styles.booked}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 12,
            }}>
            Booked {item.booked} times since yesterday
          </Text>
        </View>
        <TouchableOpacity style={styles.buttonBook}>
          <Text style={{color: '#ff8f67', fontSize: 18}}>Book Now</Text>
        </TouchableOpacity>
      </Card>
    );
  }
  render() {
    return (
      <ScrollView style={{marginLeft: 20}}>
        <View style={styles.header}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Foods and Beverages
          </Text>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Text style={{marginRight: 2, color: 'blue', fontSize: 16}}>
              SEE ALL
            </Text>
            <Icon name="chevron-right" size={20} color="blue" />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <CardContainer
            data={foodBeveragesList}
            renderCard={this.renderCard}
          />
        </View>
      </ScrollView>
    );
  }
}
