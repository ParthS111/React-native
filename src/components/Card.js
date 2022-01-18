import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Color } from '../utils/color'
import ThemeUtils from '../utils/ThemeUtils'
import Label from './Label'

export class Card extends Component {
    render() {
        return (
            <TouchableOpacity style={Styles.card} disabled={this.props.disabled ? true : false} onPress={this.props.onPress}>
                {this.props.url &&
                    <View style={Styles.imageView}>
                        <Image
                            style={Styles.tinyLogo}
                            source={{ uri: this.props.url }}
                            resizeMode='contain'
                        />
                    </View>
                }
                <Label
                    title={this.props.title}
                    discription={this.props.text}
                />

            </TouchableOpacity>
        )
    }
}

export default Card

const Styles = StyleSheet.create({
    card: {
        alignSelf: 'center',
        borderWidth: 1, borderColor: Color.BLACK, padding: 5, marginTop: ThemeUtils.relativeHeight(1), elevation: 1, shadowColor: Color.BLACK,
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        backgroundColor: Color.WHITE,
        borderRadius: 10
    },
    titleView: { flexDirection: 'row', marginVertical: ThemeUtils.relativeHeight(1) },
    text: { color: Color.BLACK },
    tinyLogo: {
        width: ThemeUtils.relativeWidth(30),
        height: ThemeUtils.relativeHeight(10),
        alignContent: 'center'
    },
    imageView: { alignItems: 'center' }
})