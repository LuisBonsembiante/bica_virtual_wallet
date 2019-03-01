import React, {Component} from 'react';
import {connect} from 'react-redux';
import {dniChanged, loginUser, passwordChanged} from "../redux/actions";
import {StyleSheet, Text, View} from 'react-native';
import {Button, Card, Input} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

class LoginForm extends Component {

    onDniChange(text) {
        this.props.dniChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const {dni, password} = this.props;
        this.props.loginUser({dni, password});
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        return (

            <Button
                loading={this.props.loading}
                backgroundColor='#03A9F4'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Acceder'
                onPress={this.onButtonPress.bind(this)}
            />

        );
    }

    render() {
        return (
            <Card title="Login" containerStyle={{
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>

                <Input inputStyle={styles.inputStyle}
                       label="DNI"
                       placeholder="xx.xxx.xxx"
                       onChangeText={this.onDniChange.bind(this)}
                       value={this.props.dni}
                       errorStyle={{color: 'red'}}
                       labelStyle={{marginTop: 10}}
                       errorMessage={this.props.error}
                       rightIcon={{ type: 'font-awesome', name: 'user' }}
                />


                <Input inputStyle={styles.inputStyle}
                       secureTextEntry
                       label="Contraseña"
                       placeholder="Contraseña"
                       errorStyle={{color: 'red'}}
                       labelStyle={{marginTop: 10}}
                       errorMessage={this.props.error}
                       onChangeText={this.onPasswordChange.bind(this)}
                       value={this.props.password}
                       rightIcon={{ type: 'font-awesome', name: 'lock' }}
                />

                {this.renderError()}

                <Text style={{marginBottom: 10, marginTop: 10, textAlign: 'center'}}>
                    Olvidate tu contraseña?
                </Text>

                {this.renderButton()}

            </Card>
        );
    }


}

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    inputStyle: {
        marginBottom: 10,
        marginTop: 10
    }
});

const mapStateToProps = state => {
    return {
        dni: state.auth.dni,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps, {dniChanged, passwordChanged, loginUser})(LoginForm);