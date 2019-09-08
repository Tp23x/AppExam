import React, {Component} from 'react';
import ReadMore from './Readmore';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Platform,
} from 'react-native';

// import ImageView from '../src/ImageView';
import ImageView from 'react-native-image-view';

const {width} = Dimensions.get('window');

const cities = [
    {
        source: {
            uri:
                'https://www.wu.ac.th/images/theme2018/images/campuslife/2019_07_16_4382.jpg',
        },
        title: 'Walailak',
    },
    {
        source: {
            uri: 'https://www.wu.ac.th/images/theme2018/images/campuslife/2019_02_12_8570.jpg',
        },
        title: 'WU',
    },
   
];

const nature = [
   
];

const tabs = [
    {title: 'Cities', images: cities},
    {title: 'Nature', images: nature},
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        paddingTop: Platform.select({ios: 0, android: 10}),
    },
    tabs: {
        flexDirection: 'row',
    },
    tab: {
        flex: 1,
        height: 30,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    tabTitle: {
        color: '#EEE',
    },
    tabTitleActive: {
        fontWeight: '700',
        color: '#FFF',
    },
    footer: {
        width,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    footerButton: {
        flexDirection: 'row',
        marginLeft: 15,
    },
    footerText: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
    },
});

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 0,
            imageIndex: 0,
            isImageViewVisible: false,
            likes: [...cities, ...nature].reduce((acc, image) => {
                acc[image.title] = 0;

                return acc;
            }, {}),
        };

        this.renderFooter = this.renderFooter.bind(this);
    }

    renderFooter({title}) {
        const {likes} = this.state;

        return (
            <View style={styles.footer}>
                <Text style={styles.footerText}>{title}</Text>
                <TouchableOpacity
                    style={styles.footerButton}
                    onPress={() => {
                        const imageLikes = likes[title] + 1;
                        this.setState({likes: {...likes, [title]: imageLikes}});
                    }}
                >
                    <Text style={styles.footerText}>♥</Text>
                    <Text style={[styles.footerText, {marginLeft: 7}]}>
                        {likes[title]}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        const {isImageViewVisible, activeTab, imageIndex} = this.state;
        const images = tabs[activeTab].images || [];

        return (
            <View style={styles.container}>
                <View>
                <ReadMore
            numberOfLines={2}
            onReady={this._handleTextReady}>
            <Text style={styles.cardText}>
            The School of Engineering and Resources, Walailak University was established in 1998. It is located in Nakhon Si Thammarat province in the upper South of Thailand. Currently, the school offers both undergraduate and Science For undergraduate programs, there are 5 Bachelors of Engineering and 2 Bachelors of Science available
            </Text>{'\n'}
            <Text style={styles.cardText}>
            - Chemical and Process Engineering
             </Text>{'\n'}
            <Text style={styles.cardText}>
            - Civil Engineering  
            </Text>{'\n'}
            <Text style={styles.cardText}>
            - Computer Engineering  
            </Text>{'\n'}
            <Text style={styles.cardText}>
            - Electrical Engineering  
            </Text>{'\n'}
            <Text style={styles.cardText}>
            - Polimer Engineering  
            </Text>{'\n'}
            
           
          </ReadMore>
                    {images.map((image, index) => (
                        <TouchableOpacity
                            key={image.title}
                            onPress={() => {
                                this.setState({
                                    imageIndex: index,
                                    isImageViewVisible: true,
                                });
                            }}
                        >
                            <Image
                                style={{width, height: 200}}
                                source={image.source}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.tabs}>
                    {tabs.map(({title}, index) => (
                        <TouchableOpacity
                            style={styles.tab}
                            key={title}
                            onPress={() => {
                                this.setState({
                                    activeTab: index,
                                });
                            }}
                        >
                            <Text
                                style={[
                                    styles.tabTitle,
                                    index === activeTab &&
                                        styles.tabTitleActive,
                                ]}
                            >
                                {title}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <ImageView
                    glideAlways
                    images={images}
                    imageIndex={imageIndex}
                    animationType="fade"
                    isVisible={isImageViewVisible}
                    renderFooter={this.renderFooter}
                    onClose={() => this.setState({isImageViewVisible: false})}
                    onImageChange={index => {
                        console.log(index);
                    }}
                />
            </View>
        );
    }
}