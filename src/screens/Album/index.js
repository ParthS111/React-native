import axios from 'axios'
import React, { Component } from 'react'
import { FlatList,  View } from 'react-native'
import Card from '../../components/Card';
import Loader from '../../components/Loader';
import { Styles } from './style'
export class Album extends Component {
    constructor() {
        super();
        this.state = {
            albumData: [],
            getUSerId: 1,
            loading: true
        }
    }
    componentDidMount() {

        this.setState({ getUSerId: this.props.route.params.itemId }, () => {
            this.getDataUsingSimpleGetCall()

        })
    }
    getDataUsingSimpleGetCall = async () => {
        await axios
            .get(`https://jsonplaceholder.typicode.com/albums?userId=${this.state.getUSerId}`)
            .then((response) => {
                this.setState({ albumData: response.data, loading: false })
            })
            .catch(function (error) {
                this.setState({ loading: false })
                alert(error.message);
            })

    };

    cardView = (item) => {
        return (
            <Card onPress={() => this.props.navigation.push('Photo', { itemId: item.id })}
                title={'Title'}
                text={item.title}
            />

        )
    }

    render() {
        return (
            <View style={Styles.container}>
                {this.state.loading && <Loader />}
                <View style={Styles.listContainer}>
                    {this.state.albumData.length > 1 &&
                        <FlatList

                            style={Styles.flatStyle}
                            data={this.state.albumData}
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

export default Album

