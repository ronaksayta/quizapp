import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import { Header } from '../sections/Header.js';

export class Contact extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            msg: 'Enter Message',
            name: 'Enter Name',
            email: 'Enter your Email Address'
        }
    }

    clearFields = () => this.setState({name: '', msg: '', email: ''});

    sendMessage = () => {
        Alert.alert(this.state.name, this.state.msg);
        this.props.navigation.goBack();
    } 

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Header navigate = {navigate} message='Press to login' />
                <Text style = {styles.heading}>Contact Us</Text>
                <TextInput 
                    style = {styles.inputs}
                    onChangeText = {(text) =>  this.setState({name: text})}
                    value = {this.state.name}
                />

                <TextInput 
                    style = {styles.multiInput}
                    onChangeText = {(text) => this.setState({msg: text})}
                    value = {this.state.msg}
                    multiline = {true}
                    numberOfLines = {4}
                    />

                <TextInput 
                    style = {styles.inputs}
                    onChangeText = {(text) =>  this.setState({email: text})}
                    value = {this.state.email}
                />

                <TouchableHighlight style = {styles.buttons} onPress = {this.sendMessage} underlayColor = '#31e981'>
                    <Text style = {styles.buttonText}>
                        Send Message
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight style = {[styles.buttons, styles.resetButton]} onPress = {this.clearFields} underlayColor = '#31e981'>
                    <Text style = {styles.buttonText}>
                        Reset Form
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%'
    },
    heading: {
        fontSize: 16,
        flex: 1
    },
    inputs: {
        flex: 1,
        width: '80%',
        borderWidth: 1,
        borderColor: '#d7d7d7',
        height: 50,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        padding: 15,
        borderRadius: 3
    },
    multiInput: {
        flex: 2,
        width: '80%',
        borderWidth: 1,
        borderColor: '#d7d7d7',
        height: 50,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 15,
        borderRadius: 3
    },
    buttons: {
        height: 45,
        alignSelf: 'stretch',
        backgroundColor: '#05a5d1',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fafafa'
    },
    resetButton: {
        backgroundColor: '#666'
    }
});