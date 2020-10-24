import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Alert,
    AsyncStorage
} from 'react-native';

export class Login extends React.Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    };

    cancelLogin = () => {
        Alert.alert('Login Cancelled!');
        this.props.navigation.navigate('HomeRT');
    }

    loginUser = () => {
        if (!this.state.username) {
            Alert.alert('Please enter a username')
        } else if (!this.state.password) {
            Alert.alert('Please enter a password')
        } else {
            AsyncStorage.getItem('userLoggedIn', (err, result) => {
                if (result !== 'none') {
                    Alert.alert('Someone already logged on');
                    this.props.navigation.navigate('HomeRT');
                } else {
                    AsyncStorage.getItem(this.state.username, (err, result) => {
                        if (result !== null) {
                            if (result !== this.state.password) {
                                Alert.alert('Password incorrect');
                            } else {
                                AsyncStorage.setItem('userLoggedIn', this.state.username, (err, result) => {
                                    Alert.alert(`${this.state.username} Logged in`);
                                    this.props.navigation.navigate('HomeRT');
                                });
                            }
                        } else {
                            Alert.alert(`No account for ${this.state.username}`);
                        }
                    })
                }
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
               <Text style={styles.heading}>Login</Text>
               <Text style={styles.label}>Enter Username</Text>
                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({ username: text })}
                    value={this.state.username}
                />
                <Text style={styles.label}>Enter Password</Text>
               <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({ password: text })}
                    value={this.state.password}
                    secureTextEntry={true}
                />
                <TouchableHighlight style={styles.buttons} onPress={this.loginUser} underlayColor='#31e981'>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight style={[styles.buttons, styles.cancelButton]} onPress={this.cancelLogin} underlayColor='#31e981'>
                    <Text style={styles.buttonText}>
                        Cancel
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%',
        paddingTop: '10%'
    },
    heading: {
        fontSize: 16,
        flex: 1,
        paddingBottom: 10
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
    cancelButton: {
        backgroundColor: '#666'
    },
    label: {
        paddingBottom: 10
    }
});