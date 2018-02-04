 import React, { Component } from 'react';
 import { Text, Image, Button } from 'react-native';
 import { Header, Left, Right, Body, Icon, Card, CardItem, Content, Container } from 'native-base';
 import PayPal from 'react-native-paypal-wrapper';

 const Styles = {
   headerStyle: {
     paddingTop: 24,
   }
 };

 export default class App extends Component {
  paypal() {
     PayPal.initialize(PayPal.SANDBOX, 'AWGri5BqpTKw-EMxzJ2kHm8yoOG5iAuFIZu1rse2D1odP6n43_hULGcs-55Nm3NgTRvw8BULJXcFX8vD');
     PayPal.pay({
       price: '3',
       currency: 'USD',
       description: 'The Power of your Subconscious Mind',
     }).then(confirm => console.log(confirm))
       .catch(error => console.log(error));
   }

   render() {
     const { headerStyle } = Styles;
     return (
       <Container style={{ backgroundColor: 'white' }} >
          <Header style={{ backgroundColor: 'blue' }} >
          <Image source={require("./img/flipkart.png")} style={{ height: 50, width: 50, paddingTop: 10 }} />
            <Right>
              <Icon name="md-search" style={{ color: 'white' }} />
              <Icon name="md-cart" style={{ color: 'white', paddingLeft: 24 }} />
            </Right>
          </Header>
          <Content>
                <Text style={{ fontSize: 20, paddingTop: 7, paddingLeft: 8 }} >The Power of your Subconscious Mind</Text>

                <Text style={{ color: '#000000', paddingTop: 3, paddingLeft: 8 }} >Joseph Murphy</Text>
         <Body>
         <Image source={require("./img/book.jpg")} style={{ height: 340, width: 220, paddingTop: 60 }} />
         </Body>

         <CardItem>
         <Text> Price: </Text>
          <Text> $ 3 </Text>
         </CardItem>

         <CardItem>
      <Button
        title="Buy Now with PayPal"
        onPress={this.paypal}
      />
         </CardItem>

         </Content>
       </Container>
     );
   }
 }
