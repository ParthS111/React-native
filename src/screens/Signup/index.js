import React, { Component } from 'react'
import { Keyboard, Text, TouchableOpacity, View, ToastAndroid } from 'react-native'
import FloatingInputText from '../../components/TextInput'
import { Color } from '../../utils/color'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Styles } from './style'
import CheckboxIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CheckBox } from 'react-native-elements';
import CustomSwitch from '../../components/CustomSwitch'
import { validation } from '../../utils/ValidationUtils';
import axios from 'axios'


const Toast = ({ visible, message }) => {
    if (visible) {
        ToastAndroid.showWithGravityAndOffset(
            message,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
        );
        return null;
    }
    return null;
};


export class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            firstNameError: '',
            lastName: '',
            lastNameError: '',
            email: '',
            emailError: '',
            userName: '',
            userNameError: '',
            password: '',
            passwordError: '',
            checked: false,
            index: 1,
            showToast: false,
            message: ''
        };
    }

    isDisabled = () => {
        return (
            <CheckBox
                checkedIcon={<CheckboxIcon name="checkbox-blank-outline" size={20} color={Color.BORDER_COLOR} />}
                uncheckedIcon={
                    <CheckboxIcon name="checkbox-marked-outline" size={20} color={Color.BORDER_COLOR} />
                }
                checked={!this.state.checked}
                onPress={() => this.setState({ checked: !this.state.checked, }, () => { Keyboard.dismiss(); })}
            />
        );
    };
    onSelectSwitch = (index) => {
        this.setState({ index })
    }
    signUp = () => {
        Keyboard.dismiss();
        let emailError, passError, firstNameError, lastNameError, userNameError;
        let isValide = true;
        firstNameError = validation('firstName', this.state.firstName.trim());
        lastNameError = validation('lastName', this.state.lastName.trim());
        userNameError = validation('userName', this.state.userName.trim());
        emailError = validation('email', this.state.email);

        passError = validation('password', this.state.password.trim());

        if (firstNameError != null || lastNameError != null || userNameError != null || emailError != null || passError != null) {
            this.setState({
                firstNameError: firstNameError,
                lastNameError: lastNameError,
                userNameError: userNameError,
                emailError: emailError,
                passwordError: passError,
            })
        } else {
            this.setState({
                firstNameError: '',
                lastNameError: '',
                userNameError: '',
                emailError: '',
                passwordError: '',
            }, () => {
                if (this.state.checked) {
                    const talent = 'http://wren.in:3200/api/sign-up/talent'
                    const fan = 'http://wren.in:3200/api/sign-up/fan'
                    axios.post(this.state.index == 1 ? fan : talent, {
                        "first_name": this.state.firstName,
                        "last_name": this.state.lastName,
                        "username": this.state.userName,
                        "email": this.state.email,
                        'password': this.state.password

                    })
                        .then((response) => {

                            this.setState({ showToast: true, message: 'Data successfully save', firstName: '', lastName: '', userName: '', email: '', password: '' })

                        })
                        .catch((error) => {
                            this.setState({ showToast: true, message: 'Please try again' })
                        });
                } else {
                    this.setState({ showToast: true, message: 'Please select terms and conditions' })
                }
            })


        }

    }


    render() {
        return (
            <View style={Styles.containerL}>
                <Toast visible={this.state.showToast} message={this.state.message} />
                <View style={Styles.switchContainer}>

                    <CustomSwitch
                        selectionMode={1}
                        roundCorner={true}
                        option1={'Fan SIgnUp'}
                        option2={'Talent Signup'}
                        onSelectSwitch={(index) => this.onSelectSwitch(index)}
                        selectionColor={Color.WHITE}
                    />
                    <Text style={Styles.title}>Create Your Fan Account</Text>
                </View>
                <View style={Styles.secondContainer}>
                    <KeyboardAwareScrollView
                        enabled={true}
                        keyboardVerticalOffset={0}
                        enableOnAndroid={true}
                        keyboardShouldPersistTaps="always">
                        <FloatingInputText
                            label={'First name'}
                            value={this.state.firstName}
                            onChangeText={firstName => this.setState({ firstName })}
                            placeholder='First name'
                            errorMessage={this.state.firstNameError}
                        />
                        <FloatingInputText
                            label={'Last name'}
                            value={this.state.lastName}
                            onChangeText={lastName => this.setState({ lastName })}
                            placeholder='Last name'
                            errorMessage={this.state.lastNameError}
                        />
                        <FloatingInputText
                            label={'Username'}
                            value={this.state.userName}
                            onChangeText={userName => this.setState({ userName })}
                            placeholder='Username'
                            errorMessage={this.state.userNameError}
                        />
                        <FloatingInputText
                            label={'Email'}
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            placeholder='Email'
                            errorMessage={this.state.emailError}
                        />
                        <FloatingInputText
                            label={'Password'}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            placeholder='Password'
                            errorMessage={this.state.passwordError}
                        />
                        <View style={Styles.checkBoxContainer}>
                            <View>
                                {this.isDisabled()}
                            </View>
                            <View style={Styles.termnContainer}>
                                <Text style={Styles.tncText}>I agree to the <Text style={Styles.tncText1}>Terms and Conditions</Text> </Text>

                            </View>
                        </View>
                        <View style={Styles.btnContainer}>
                            <TouchableOpacity style={Styles.btn} onPress={() => this.signUp()}>
                                <Text style={Styles.btnText}>SIGN UP</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAwareScrollView>
                </View>


            </View>
        )
    }
}

export default SignUp
