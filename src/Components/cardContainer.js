//import liraries
import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
// create a component
class CardContainer extends Component {
  renderCards() {
    return this.props.data.map((item, index) => {
      return <View key={item.id}>{this.props.renderCard(item)}</View>;
    });
  }
  render() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {this.renderCards()}
      </ScrollView>
    );
  }
}
//make this component available to the app
export default CardContainer;
