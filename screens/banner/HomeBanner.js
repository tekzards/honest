import React from 'react'
import { StyleSheet, View, Text, Dimensions, Image} from 'react-native'
import Carousel from 'react-native-banner-carousel';


const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 250;
 
const images = [
    "https://picsum.photos/id/870/200/300?grayscale&blur=2",
    "https://picsum.photos/seed/picsum/200/300",
    "https://picsum.photos/200/300?grayscale"
];

export default class HomeBanner extends React.Component {
    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
            </View>
        );
    }
 
    render() {
        return (
            <View style={styles.banner}>
                <Carousel style={styles.bannerImages}
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                >
                    {images.map((image, index) => this.renderPage(image, index))}
                </Carousel>
            </View>
        );
    }
}



/*function HomeBanner() {
    return (
        <View style={styles.banner}>
        <Carousel
            autoplay
            autoplayTimeout={5000}
            loop
            index={0}
            pageSize={BannerWidth}
        >
            {images.map((image, index) => renderPage(image, index))}
        </Carousel>
    </View>
    )
}*/

const styles = StyleSheet.create({
    banner: {
     
      color: '#fff',
      justifyContent: 'center',
      

    },
    bannerImages:{
     backgroundSize:"100%",
     backgroundRepeat:"no-repeat",
     backgroundPosition:"center"
    }
  });
  

