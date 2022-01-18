import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Color } from '../utils/color'
import ThemeUtils from '../utils/ThemeUtils'

export class Label extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text style={[Styles.text,{fontWeight:'500'}]}>{this.props.title} : </Text>
                <Text style={[Styles.text,{width:ThemeUtils.relativeWidth(80)}]}>{this.props.discription}</Text>
            </View>
        )
    }
}

export default Label
export const Styles = StyleSheet.create({
   container:{flexDirection:'row'},
    text: { color: Color.BLACK },
})