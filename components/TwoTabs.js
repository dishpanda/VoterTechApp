import React from "react";
import { View, Text, TouchableOpacity, Animated, ScrollView, Image, Dimensions, FlatList, StyleSheet} from "react-native";

const { width } = Dimensions.get('window');
const badges = [{key: '1'}, {key: '2'}, {key: '3'}, {key: '4'}, {key: '5'}, {key: '6'}, {key: '7'}, {key: '8'}, {key: '9'}]
const numColumns = 3
const WIDTH = Dimensions.get('window').width

export default class TwoTabs extends React.Component {

    formatData = (data, numColumns) => {
        const totalRows = Math.floor(data.length / numColumns)
        let totalLastRow = dataList.length - (totalRows * numColumns)

        while (totalLastRow !== 0 && totalLastRow !== numColumns) {
            dataList.push({key: 'blank', empty: true})
            totalLastRow++ 
        }

        return dataList
    }

    state = {
        active: 0,
        xTabOne: 0,
        xTabTwo: 0,
        translateX: new Animated.Value(0),
        translateXTabOne: new Animated.Value(0),
        translateXTabTwo: new Animated.Value(width),
        translateY: -1000
    };

    handleSlide = type => {
        let {
            active,
            xTabOne,
            xTabTwo,
            translateX,
            translateXTabOne,
            translateXTabTwo
        } = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 100
        }).start();
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: 0,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: width,
                    duration: 100
                }).start()
            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -width,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: 0,
                    duration: 100
                }).start()
            ]);
        }
    };


    _renderItem = ({item, index}) => {
        let {itemStyle, itemText} = styles
        return (
            <View style={itemStyle}>
                <Text style={styles.itemText}>{item.key}</Text>
                <Image 
                    source={require('../assets/voting.jpg')}
                    style={{
                        width: 60, 
                        height: 60, 
                        borderRadius: 60,
                        margin: 20}}>
                </Image>

            </View>
        )
    }

    render() {
        let {
            xTabOne,
            xTabTwo,
            translateX,
            active,
            translateXTabOne,
            translateXTabTwo,
            translateY
        } = this.state;
        let {container, itemText} = styles;
        return (
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        width: '100%',
                        marginLeft: 'auto',
                        marginRight: 'auto' //will auto replace margins
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 10,
                            marginBottom: 20,
                            height: 36,
                            position: 'relative',
                            width: Dimensions.get('window').width - 40, //the auto didnt adjust to the iphone screen so did it 
                        }}
                    >
                        <Animated.View
                            style={{
                                position: "absolute",
                                width: "50%",
                                height: "100%",
                                top: 0,
                                left: 0,
                                backgroundColor: "#003057",
                                borderRadius: 4,
                                transform: [
                                    {
                                        translateX
                                    }
                                ]
                            }}
                        />
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: "#003057",
                                borderRadius: 4,
                                borderRightWidth: 0,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabOne: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 0 }, () =>
                                    this.handleSlide(xTabOne)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 0 ? "#fff" : "#003057"
                                }}
                            >
                                Your Badges
                            </Text>
                            

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: "#003057",
                                borderRadius: 4,
                                borderLeftWidth: 0,
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabTwo: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 1 }, () =>
                                    this.handleSlide(xTabTwo)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 1 ? "#fff" : "#003057"
                                }}
                            >
                                Progress
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView>
                        <Animated.View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                transform: [
                                    {
                                        translateX: translateXTabOne
                                    }
                                ]
                            }}
                            onLayout={event =>
                                this.setState({
                                    translateY: event.nativeEvent.layout.height
                                })
                            }
                        >
                            <Text>Hello, here are the badges you've earned so far!</Text>
                            <View style={container}>
                                <FlatList 
                                    data={badges}
                                    renderItem={this._renderItem}
                                    keyExtractor={(item, index) => index.toString()}
                                    numColumns={numColumns}
                                    ></FlatList>
                                
                                {/* <Image 
                                    source={require('../assets/voting.jpg')}
                                    style={{
                                        width: 60, 
                                        height: 60, 
                                        borderRadius: 60,
                                        margin: 20}}>
                                </Image>
                                <Image 
                                    source={require('../assets/ballot.jpg')}
                                    style={{
                                        width: 60, 
                                        height: 60, 
                                        borderRadius: 60,
                                        margin: 20}}>

                                </Image>
                                <Image 
                                    source={require('../assets/absentee.jpg')}
                                    style={{
                                        width: 60, 
                                        height: 60, 
                                        borderRadius: 60,
                                        margin: 20}}>

                                </Image> */}
                                
                                    
                            
                            </View>
                            <View style={{ marginTop: 20 }}>
                            </View>
                        </Animated.View>

                        <Animated.View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                transform: [
                                    {
                                        translateX: translateXTabTwo
                                    },
                                    {
                                        translateY: -translateY
                                    }
                                ]
                            }}
                        >
                            <Text>Here is your progress.</Text>
                            <View style={{ marginTop: 20 }}>
                            </View>
                        </Animated.View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10
    },
    itemStyle: {
        backgroundColor: '#003057',
        alignItems: 'center',
        justifyContent: 'center',
        height: 130, 
        flex: 1,
        opacity: 0.8,
        margin: 1

    },
    itemText: {
        fontSize: 20,
        color: '#FFFFFF',
        paddingBottom: 0
    },

});
