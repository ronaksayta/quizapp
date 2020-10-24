import React from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';

const aboutGlobo = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro assumenda facere earum mollitia rem enim expedita corporis est numquam vitae neque officia et voluptate consequatur, aspernatur nemo repellendus nulla obcaecati.';

const whatGlobo = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro assumenda facere earum mollitia rem enim expedita corporis est numquam vitae neque officia et voluptate consequatur, aspernatur nemo repellendus nulla obcaecati.';

export class About extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return(
            <ScrollView style = {styles.container}>
                <Image style = {styles.pics} source = {require('../sections/img/aboutImage.jpg')} />
                <Text style = {styles.aboutTitle}>Who We Are</Text>
                <Text style = {styles.aboutText}>{aboutGlobo}</Text>

                <Image style = {styles.pics} source = {require('../sections/img/aboutImage.jpg')} />
                <Text style = {styles.aboutTitle}>What We Do</Text>
                <Text style = {styles.aboutText}>{whatGlobo}</Text>
                <Text onPress = {() => this.props.navigation.goBack()} style = {styles.backButton}>GO BACK</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 30,
        backgroundColor: '#ffffff'
    },
    pics: {
        height: 300
    },
    aboutTitle: {
        paddingTop: 10,
        textAlign: 'center'
    },
    aboutText: {
        paddingBottom: 20
    },
    backButton: {
        paddingBottom: 50,
        textAlign: 'center'
    }
})