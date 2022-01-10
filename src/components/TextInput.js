import React, { Component } from 'react';
import { Color } from "../utils/color";
import { View, TextInput, Text, StyleSheet } from 'react-native';


class FloatingInputText extends Component {

    constructor(props) {
        super(props)

    }

    render() {

        return (
            <View style={Styles.container} >
                <Text style={Styles.label}>{this.props.label} *</Text>
                <View style={Styles.subContainer}>
                    <View style={Styles.inputContainer}>
                        <TextInput
                            style={Styles.inputStyle}
                            placeholderTextColor={Color.PLACEHOLDER}
                            onChangeText={this.props.onChangeText}
                            value={this.props.value}
                            placeholder={this.props.placeholder}
                            keyboardType={this.props.keyboardType}
                            autoCapitalize={this.props.AutoCapitalize}
                        />


                        {this.props.errorMessage ?
                            <Text style={Styles.errorText}>{this.props.errorMessage}</Text>
                            : null
                        }

                    </View>
                </View>
            </View>
        )
    }
}


const Styles = StyleSheet.create({
    container: { marginBottom: 10 },
    label: { color: Color.TEXT_PRIMARY, marginLeft: 20, marginBottom: 5 },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
    },
    inputContainer: { flexDirection: 'column', flex: 1, },
    inputStyle: {
        paddingHorizontal: 20,
        height: 40,
        fontSize: 16,
        borderWidth: 3,
        borderColor: Color.BORDER_COLOR,
        backgroundColor: Color.BACKGROUND,
        borderRadius: 30,
        color: "#fff",
        elevation: 1,
        marginBottom: 10

    },
    errorText: { color: Color.RED, marginLeft: 20, marginBottom: 5 }


})
export default FloatingInputText;