import axios from 'axios'
import React, { Component } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import Label from '../../components/Label';
import Loader from '../../components/Loader';
import { Color } from '../../utils/color';
import ThemeUtils from '../../utils/ThemeUtils';
import { Styles } from './style'
export class User extends Component {
    constructor() {
        super();
        this.state = {
            userData: [],
            loading: true
        }
    }
    componentDidMount() {

        this.getDataUsingSimpleGetCall()
    }
    getDataUsingSimpleGetCall = async () => {
        await axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({ userData: response.data, loading: false })
            })
            .catch(function (error) {
                this.setState({ loading: false })
                alert(error.message);
            })

    };

    cardView = (item) => {
        return (
            <TouchableOpacity style={Styles.card} onPress={() => this.props.navigation.push('Album', { itemId: item.id })}>
                <Label
                    title={'Name'}
                    discription={item.name} />
                <Label
                    title={'UserName'}
                    discription={item.username} />
                <Label
                    title={'Email'}
                    discription={item.email} />
                <Label
                    title={'Name'}
                    discription={item.name} />
                <Label
                    title={'Address'}
                    discription={`${item.address.suite},${item.address.street},${item.address.city},zipcode - ${item.address.zipcode}`} />
                <Label
                    title={'phone'}
                    discription={item.phone} />
                <Label
                    title={'website'}
                    discription={item.website} />
                <Text style={Styles.boldText}>Company details :</Text>
                <Label
                    title={'Company Name'}
                    discription={item.company.name} />
                <Label
                    title={'catchPhrase'}
                    discription={item.company.catchPhrase} />
                <Label
                    title={'BS'}
                    discription={item.company.bs} />

            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={Styles.container}>
                {this.state.loading && <Loader />}
                <View style={Styles.listContainer}>
                    {this.state.userData.length > 1 &&
                        <FlatList
                            style={Styles.flatStyle}
                            data={this.state.userData}
                            renderItem={(item) => this.cardView(item.item)}
                            keyExtractor={(item) => item.id}
                            refreshing={false}
                        />
                    }
                </View>
            </View>
        )
    }
}

export default User

