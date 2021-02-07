<<<<<<< HEAD
import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    ScrollView,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import logo from '../../assets/logo.png'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Rice from '../../assets/rice.png'
import Noddles from '../../assets/noodles.png'
import HotDogs from '../../assets/hotdogs.png'
import Biryani from '../../assets/biryani.jpg'
import Veg_Biryani from '../../assets/veg-biryani.png'
import Salads from '../../assets/salads.jpg'
import Burger from '../../assets/burger.jpg'
import Pizza from '../../assets/Pizza.jpg'
import Desserts from '../../assets/desserts.jpg'
import Drinks from '../../assets/drinks.jpg'
import food4 from '../../assets/food4.jpg'
import GradeIcon from '@material-ui/icons/Grade';
import BannerImage from '../../assets/food1.jpg'

 const Home = ({ navigation }) => {

    //dummy Data

    const initialCurrectLocation = {
        streenName: "Nandyal",
        gps: {
            latitudu: 15.478569,
            longitudu: 78.483093
        }
    }
    const categoryData = [
        {
            id: 1,
            ItemName: "Rice",
            icon: `${Rice}`
        },
        {
            id: 2,
            ItemName: "Noodles",
            icon: `${Noddles}`
        },
        {
            id: 3,
            ItemName: "Hot Dogs",
            icon: `${HotDogs}`
        },
        {
            id: 4,
            ItemName: "Biryani",
            icon: `${Biryani}`
        },
        {
            id: 5,
            ItemName: "Veg",
            icon: `${Veg_Biryani}`
        },
        {
            id: 6,
            ItemName: "Salads",
            icon: `${Salads}`
        },
        {
            id: 7,
            ItemName: "Burgers",
            icon: `${Burger}`
        },
        {
            id: 8,
            ItemName: "Pizza",
            icon: `${Pizza}`
        },
        {
            id: 9,
            ItemName: "Desserts",
            icon: `${Desserts}`
        },
        {
            id: 10,
            ItemName: "Drinks",
            icon: `${Drinks}`
        },
    ]

    //price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData  = [
        {
            id: 1,
            name: "Panjabi Daba",
            rating: 4.6,
            categories: ["Biryani", "Veg-Biryani", "Snacks"],
            priceStaic: '200',
            priceImage: `$`,
            priceRating: affordable,
            photo: 'https://www.singleplatform.com/wp-content/uploads/2018/12/5-Tips-for-Improving-Restaurant-Ambiance.jpg',
            //photo: 'https://img.etimg.com/thumb/msid-78593336,width-1200,height-900,imgsize-305744,resizemode-8,quality-100/industry/services/hotels-/-restaurants/turning-the-table-how-restaurant-business-is-reinventing-itself-after-corona-shock.jpg',
            duration: "30 - 45 min",
            isOpen: true,
            location: {
                latitude: 14.1503303,
                longitude: 78.5141996,
            },
            courier: {
                avatar: 'https://cdn0.iconfinder.com/data/icons/profession-and-occupation-icons/110/avatar_occupation_profile_cook_kitchener_flunkey_food-512.png',
                name: "Roshan"
            },
            menu: [
                {
                    menuId: 1,
                    menuItemName: 'Crispy Chiken Burger',
                    description: 'Burger with Crispy chiken, cheese and lettuce',
                    calories: 200,
                    price: 10,
                },
                {
                    menuId: 2,
                    menuItemName: 'Crispy Chiken Burger with Honey Mustard',
                    description: 'Crispy Chiken Burger with Honey Mustard',
                    calories: 240,
                    price: 15,
                },
                {
                    menuId: 3,
                    menuItemName: 'Crispy Baked French Fries',
                    description: 'Crispy Baked French Fries',
                    calories: 140,
                    price: 40,
                },

            ]
        },
        {
            id: 2,
            name: "Hyderabad Biryani Restaurant",
            rating: 3.9,
            categories: ["Drinks", "Veg-Biryani", "Snacks"],
            priceRating: expensive,
            priceStaic: '250',
            priceImage: `$`,
            photo: 'https://img.etimg.com/thumb/msid-78593336,width-1200,height-900,imgsize-305744,resizemode-8,quality-100/industry/services/hotels-/-restaurants/turning-the-table-how-restaurant-business-is-reinventing-itself-after-corona-shock.jpg',
            duration: "20 - 35 min",
            isOpen: false,
            location: {
                latitude: 14.1503303,
                longitude: 78.5141996,
            },
            courier: {
                avatar: 'https://cdn0.iconfinder.com/data/icons/profession-and-occupation-icons/110/avatar_occupation_profile_cook_kitchener_flunkey_food-512.png',
                name: "Roshan 02"
            },
            menu: [
                {
                    menuId: 1,
                    menuItemName: 'Crispy Chiken Burger',
                    description: 'Burger with Crispy chiken, cheese and lettuce',
                    calories: 200,
                    price: 10,
                },
                {
                    menuId: 2,
                    menuItemName: 'Crispy Chiken Burger with Honey Mustard',
                    description: 'Crispy Chiken Burger with Honey Mustard',
                    calories: 240,
                    price: 15,
                },
                {
                    menuId: 3,
                    menuItemName: 'Crispy Baked French Fries',
                    description: 'Crispy Baked French Fries',
                    calories: 140,
                    price: 40,
                },

            ]
        },

    ]

    const [categories, setCategories] = React.useState(categoryData);
    const [selectedCategories, setSelectedCategories] = React.useState(null);
    const [restaurants, setRestaurants] = React.useState(restaurantData);
    const [currectLocation, setCurrectLocation] = React.useState(initialCurrectLocation);

    function onSelectCategory (category) {
        //filter Restaurant

        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))
        setRestaurants(restaurantList)
        setSelectedCategories(category)
       
    }
   
    function renderHeader() {
        return (
            <View style={{ flexDirection: "row", height: 50, marginTop: 20 }}>
                <TouchableOpacity
                    style={{ 
                        width: 50,
                        paddingLeft: 10,
                        justifyContent: 'center'
                    }}
                >
                    <Image 
                        source={logo}
                        resizeMode= "contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
                <View style={{
                    flex: 1, 
                    alignItems: "center",
                    justifyContent: 'center'
                }}>
                    <View style={{
                        width: '70%',
                        height: '100%',
                        backgroundColor: '#f1f1f1',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '30px',
                        padding: 5,
                        overflow: 'hidden',
                        textOverflow: "ellipsis"
                    }}>
                        <Text style={{
                            fontWeight: 600,
                            color: "#000",
                        }}>{initialCurrectLocation.streenName}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: 12,
                        justifyContent: 'center'
                    }}
                >
                    <View>
                        <ShoppingBasketIcon />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    function renderMainCategories() {

        const renderItem = ({item}) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: 10,
                        paddingBottom: 20,
                        backgroundColor: (selectedCategories?.id == item.id) ? "orange" : "#f1f1f1",
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 7,
                        ...styles.shadow,
                        boxShadow: '0 13px 10px -15px'
                    }}
                    //onPress = {() => onSelectCategory(item) }
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: "#fff",
                            overflow: 'hidden',
                            boxShadow: '0 13px 10px -15px'
                        }}
                    >
                        <Image 
                            source={item.icon}
                            resizeMode = "contain"
                            style = {{
                                width: 40,
                                height: 40,
                                overflow: 'hidden'
                            }}
                        />
                    </View>
                    <Text style={{
                        marginTop: 8,
                        color: (selectedCategories?.id == item.id) ? "#fff" : "#000",
                        fontWeight: 600,
                        fontSize: 10,
                        textTransform: 'uppercase'
                    }}>
                            {item.ItemName}
                    </Text>

                </TouchableOpacity>
            )
        } 

        
        
        return (
            <View style={{paddingLeft: 10, paddingRight: 10}}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginLeft: '-5px'
                }}> Main Categories</Text>
                <FlatList 
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator= {false}
                    keyExtractor = {item => `${item.id}`}
                    renderItem = {renderItem}
                    contentContainerStyle={{paddingVertical: 20}}
                />
            </View>
        )
    }

    function renderBannerImage() {
        return (
            <View style={{
                height: 200,
                overflow: 'hidden',
                marginTop: 20,
                marginBottom: 25
            }}>
                <Image source={BannerImage}
                resizeMode = "cover"
                style = {{
                    width: '100%',
                    height: 200,
                    overflow: 'hidden'
                }}
                />
            </View>
        )
    }
    function renderRestaurantTitle() {
        return(
            <View>
                <Text style={{
                    marginLeft: 10,
                    marginRight: 10,
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginBottom: 15,
                    marginTop: 5
                }}>
                    Restaurant around you
                </Text>
            </View>
        )
    }

    function renderRestaurantList() {
       const renderItem = ({item}) => (
           <TouchableOpacity
            style={{
                marginBottom: 20,
                paddingLeft: 0,
                position: 'relative',
                backgroundColor: '#fff',
                boxShadow: '1px 1px 20px -12px',
                paddingBottom: 7,
                borderRadius: 15,
            }}
             //onPress -> navigation to Restaurant screen
             onPress = {() => navigation.navigate("Restaurant", {
                 item,
                 currectLocation
             })}
           >
               <View>
                   <Image source={item.photo}
                    resizeMode = "cover"
                    style= {{
                        width: "100%",
                        height: 200,
                        borderTopRightRadius: 15,
                        borderTopLeftRadius: 15
                    }}
                   />
               </View>
               <View style = {{
                   position: 'absolute',
                   top: 170,
                   height: 30,
                   width: 90,
                   right: 0,
                   backgroundColor: '#ffffffd6',
                   borderTopLeftRadius: 20,
                   borderBottomLeftRadius: 0,
                   alignItems: 'center',
                   justifyContent: 'center',
                   boxShadow: '1px 1px 20px -12px'
               }}>
                   <Text style={{
                       fontSize: 12,
                       fontWeight: 700
                   }}>
                       {item.duration}
                   </Text>
               </View>
               {/* Restaurant Info */}
               <View>
                   <Text style={{
                       fontSize: 18,
                       fontWeight: 600,
                       marginTop: 10,
                       paddingLeft: 10
                   }}>
                    {item.name}
                   </Text>
               </View>
               <View style={{
                   marginTop: 10,
                   flexDirection: 'row',
                   paddingLeft: 10,
                   position: 'relative'
               }}>
                   {/* Image */}
                   
                   {/* <Image 
                    source = {GradeIcon} 
                    style={{
                        height: 20,
                        width: 20,
                        tintColor: '#fff',
                        marginRight: 10
                    }}
                   /> */}
                   <Text style={{
                       alignItems: 'center',
                       display: 'flex'
                   }}>
                   <GradeIcon style={{
                       color: "orange",
                       width: 20,
                       height: 20,
                       marginRight: 3
                   }}/> {item.rating}
                   </Text>
                   <View style={{
                       flexDirection: 'row',
                       marginLeft: 0
                   }}>
                       <Text style={{
                           marginLeft: 5,
                           backgroundColor: '#ddd',
                           width: 3,
                           height: 3,
                           borderRadius: 50,
                           marginRight: 5,
                           position: 'relative',
                           top: 8
                       }}></Text>
                       <Text>
                            {item.categories[0]}
                       </Text>
                       <Text style={{
                           marginLeft: 5,
                           backgroundColor: '#ddd',
                           width: 3,
                           height: 3,
                           borderRadius: 50,
                           marginRight: 5,
                           position: 'relative',
                           top: 8
                       }}></Text>
                       <Text>
                           {item.categories[1]}</Text>
                        <Text style={{
                           marginLeft: 5,
                           backgroundColor: '#ddd',
                           width: 3,
                           height: 3,
                           borderRadius: 50,
                           marginRight: 5,
                           position: 'relative',
                           top: 8
                            }}>
                       </Text>
                       <Text>
                           {item.categories[2]}
                        </Text>
                        
                        
                        
                   </View>
                   <View style= {{
                       position: 'absolute',
                       right: 10,
                   }}>
                        <Text style={{
                            fontWeight: 700
                        }}>
                            {item.priceImage}{item.priceStaic}
                        </Text>
                   </View>

               </View>

           </TouchableOpacity>
       )
        return (
            <FlatList 
                data={restaurants}
                keyExtractor = {item => `${item.id}`}
                renderItem = {renderItem}
                contentContainerStyle = {{
                    paddingHorizontal: 8,
                    paddingBottom: 30
                }}
            />
        )
    }
    return (
        <SafeAreaView style = {styles.container}>
            <ScrollView style={styles.scrollView}>
                {renderHeader()}
                {renderBannerImage()}
                {renderMainCategories()}
                {renderRestaurantTitle()}
                {renderRestaurantList()} 
            </ScrollView>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    scrollView: {
        marginHorizontal: 0,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        elevation: 5,
        boxShadow: '0 13px 10px -15px'
    },
    dotStyle: {
        marginLeft: 5,
        backgroundColor: '#ddd',
        width: 5,
        height: 5,
        borderRadius: 50,
        marginRight: 5,
        position: 'relative',
        top: 8
    }
})

=======
import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    ScrollView,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import logo from '../../assets/logo.png'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Rice from '../../assets/rice.png'
import Noddles from '../../assets/noodles.png'
import HotDogs from '../../assets/hotdogs.png'
import Biryani from '../../assets/biryani.jpg'
import Veg_Biryani from '../../assets/veg-biryani.png'
import Salads from '../../assets/salads.jpg'
import Burger from '../../assets/burger.jpg'
import Pizza from '../../assets/Pizza.jpg'
import Desserts from '../../assets/desserts.jpg'
import Drinks from '../../assets/drinks.jpg'
import food4 from '../../assets/food4.jpg'
import GradeIcon from '@material-ui/icons/Grade';
import BannerImage from '../../assets/food1.jpg'

 const Home = ({ navigation }) => {

    //dummy Data

    const initialCurrectLocation = {
        streenName: "Nandyal",
        gps: {
            latitudu: 15.478569,
            longitudu: 78.483093
        }
    }
    const categoryData = [
        {
            id: 1,
            ItemName: "Rice",
            icon: `${Rice}`
        },
        {
            id: 2,
            ItemName: "Noodles",
            icon: `${Noddles}`
        },
        {
            id: 3,
            ItemName: "Hot Dogs",
            icon: `${HotDogs}`
        },
        {
            id: 4,
            ItemName: "Biryani",
            icon: `${Biryani}`
        },
        {
            id: 5,
            ItemName: "Veg",
            icon: `${Veg_Biryani}`
        },
        {
            id: 6,
            ItemName: "Salads",
            icon: `${Salads}`
        },
        {
            id: 7,
            ItemName: "Burgers",
            icon: `${Burger}`
        },
        {
            id: 8,
            ItemName: "Pizza",
            icon: `${Pizza}`
        },
        {
            id: 9,
            ItemName: "Desserts",
            icon: `${Desserts}`
        },
        {
            id: 10,
            ItemName: "Drinks",
            icon: `${Drinks}`
        },
    ]

    //price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData  = [
        {
            id: 1,
            name: "Panjabi Daba",
            rating: 4.6,
            categories: ["Biryani", "Veg-Biryani", "Snacks"],
            priceStaic: '200',
            priceImage: `$`,
            priceRating: affordable,
            photo: 'https://www.singleplatform.com/wp-content/uploads/2018/12/5-Tips-for-Improving-Restaurant-Ambiance.jpg',
            //photo: 'https://img.etimg.com/thumb/msid-78593336,width-1200,height-900,imgsize-305744,resizemode-8,quality-100/industry/services/hotels-/-restaurants/turning-the-table-how-restaurant-business-is-reinventing-itself-after-corona-shock.jpg',
            duration: "30 - 45 min",
            isOpen: true,
            location: {
                latitude: 14.1503303,
                longitude: 78.5141996,
            },
            courier: {
                avatar: 'https://cdn0.iconfinder.com/data/icons/profession-and-occupation-icons/110/avatar_occupation_profile_cook_kitchener_flunkey_food-512.png',
                name: "Roshan"
            },
            menu: [
                {
                    menuId: 1,
                    menuItemName: 'Crispy Chiken Burger',
                    description: 'Burger with Crispy chiken, cheese and lettuce',
                    calories: 200,
                    price: 10,
                },
                {
                    menuId: 2,
                    menuItemName: 'Crispy Chiken Burger with Honey Mustard',
                    description: 'Crispy Chiken Burger with Honey Mustard',
                    calories: 240,
                    price: 15,
                },
                {
                    menuId: 3,
                    menuItemName: 'Crispy Baked French Fries',
                    description: 'Crispy Baked French Fries',
                    calories: 140,
                    price: 40,
                },

            ]
        },
        {
            id: 2,
            name: "Hyderabad Biryani Restaurant",
            rating: 3.9,
            categories: ["Drinks", "Veg-Biryani", "Snacks"],
            priceRating: expensive,
            priceStaic: '250',
            priceImage: `$`,
            photo: 'https://img.etimg.com/thumb/msid-78593336,width-1200,height-900,imgsize-305744,resizemode-8,quality-100/industry/services/hotels-/-restaurants/turning-the-table-how-restaurant-business-is-reinventing-itself-after-corona-shock.jpg',
            duration: "20 - 35 min",
            isOpen: false,
            location: {
                latitude: 14.1503303,
                longitude: 78.5141996,
            },
            courier: {
                avatar: 'https://cdn0.iconfinder.com/data/icons/profession-and-occupation-icons/110/avatar_occupation_profile_cook_kitchener_flunkey_food-512.png',
                name: "Roshan 02"
            },
            menu: [
                {
                    menuId: 1,
                    menuItemName: 'Crispy Chiken Burger',
                    description: 'Burger with Crispy chiken, cheese and lettuce',
                    calories: 200,
                    price: 10,
                },
                {
                    menuId: 2,
                    menuItemName: 'Crispy Chiken Burger with Honey Mustard',
                    description: 'Crispy Chiken Burger with Honey Mustard',
                    calories: 240,
                    price: 15,
                },
                {
                    menuId: 3,
                    menuItemName: 'Crispy Baked French Fries',
                    description: 'Crispy Baked French Fries',
                    calories: 140,
                    price: 40,
                },

            ]
        },

    ]

    const [categories, setCategories] = React.useState(categoryData);
    const [selectedCategories, setSelectedCategories] = React.useState(null);
    const [restaurants, setRestaurants] = React.useState(restaurantData);
    const [currectLocation, setCurrectLocation] = React.useState(initialCurrectLocation);

    function onSelectCategory (category) {
        //filter Restaurant

        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))
        setRestaurants(restaurantList)
        setSelectedCategories(category)
       
    }
   
    function renderHeader() {
        return (
            <View style={{ flexDirection: "row", height: 50, marginTop: 20 }}>
                <TouchableOpacity
                    style={{ 
                        width: 50,
                        paddingLeft: 10,
                        justifyContent: 'center'
                    }}
                >
                    <Image 
                        source={logo}
                        resizeMode= "contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
                <View style={{
                    flex: 1, 
                    alignItems: "center",
                    justifyContent: 'center'
                }}>
                    <View style={{
                        width: '70%',
                        height: '100%',
                        backgroundColor: '#f1f1f1',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '30px',
                        padding: 5,
                        overflow: 'hidden',
                        textOverflow: "ellipsis"
                    }}>
                        <Text style={{
                            fontWeight: 600,
                            color: "#000",
                        }}>{initialCurrectLocation.streenName}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: 12,
                        justifyContent: 'center'
                    }}
                >
                    <View>
                        <ShoppingBasketIcon />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    function renderMainCategories() {

        const renderItem = ({item}) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: 10,
                        paddingBottom: 20,
                        backgroundColor: (selectedCategories?.id == item.id) ? "orange" : "#f1f1f1",
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 7,
                        ...styles.shadow,
                        boxShadow: '0 13px 10px -15px'
                    }}
                    //onPress = {() => onSelectCategory(item) }
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: "#fff",
                            overflow: 'hidden',
                            boxShadow: '0 13px 10px -15px'
                        }}
                    >
                        <Image 
                            source={item.icon}
                            resizeMode = "contain"
                            style = {{
                                width: 40,
                                height: 40,
                                overflow: 'hidden'
                            }}
                        />
                    </View>
                    <Text style={{
                        marginTop: 8,
                        color: (selectedCategories?.id == item.id) ? "#fff" : "#000",
                        fontWeight: 600,
                        fontSize: 10,
                        textTransform: 'uppercase'
                    }}>

                    </Text>

                </TouchableOpacity>
            )
        } 

        
        
        return (
            <View style={{paddingLeft: 10, paddingRight: 10}}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginLeft: '-5px'
                }}> Main Categories</Text>
                <FlatList 
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator= {false}
                    keyExtractor = {item => `${item.id}`}
                    renderItem = {renderItem}
                    contentContainerStyle={{paddingVertical: 20}}
                />
            </View>
        )
    }

    function renderBannerImage() {
        return (
            <View style={{
                height: 200,
                overflow: 'hidden',
                marginTop: 20,
                marginBottom: 25
            }}>
                <Image source={BannerImage}
                resizeMode = "cover"
                style = {{
                    width: '100%',
                    height: 200,
                    overflow: 'hidden'
                }}
                />
            </View>
        )
    }
    function renderRestaurantTitle() {
        return(
            <View>
                <Text style={{
                    marginLeft: 10,
                    marginRight: 10,
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginBottom: 15,
                    marginTop: 5
                }}>
                    Restaurant around you
                </Text>
            </View>
        )
    }

    function renderRestaurantList() {
       const renderItem = ({item}) => (
           <TouchableOpacity
            style={{
                marginBottom: 20,
                paddingLeft: 0,
                position: 'relative',
                backgroundColor: '#fff',
                boxShadow: '1px 1px 20px -12px',
                paddingBottom: 7,
                borderRadius: 15,
            }}
             //onPress -> navigation to Restaurant screen
             onPress = {() => navigation.navigate("Restaurant", {
                 item,
                 currectLocation
             })}
           >
               <View>
                   <Image source={item.photo}
                    resizeMode = "cover"
                    style= {{
                        width: "100%",
                        height: 200,
                        borderTopRightRadius: 15,
                        borderTopLeftRadius: 15
                    }}
                   />
               </View>
               <View style = {{
                   position: 'absolute',
                   top: 170,
                   height: 30,
                   width: 90,
                   right: 0,
                   backgroundColor: '#ffffffd6',
                   borderTopLeftRadius: 20,
                   borderBottomLeftRadius: 0,
                   alignItems: 'center',
                   justifyContent: 'center',
                   boxShadow: '1px 1px 20px -12px'
               }}>
                   <Text style={{
                       fontSize: 12,
                       fontWeight: 700
                   }}>
                       {item.duration}
                   </Text>
               </View>
               {/* Restaurant Info */}
               <View>
                   <Text style={{
                       fontSize: 18,
                       fontWeight: 600,
                       marginTop: 10,
                       paddingLeft: 10
                   }}>
                    {item.name}
                   </Text>
               </View>
               <View style={{
                   marginTop: 10,
                   flexDirection: 'row',
                   paddingLeft: 10,
                   position: 'relative'
               }}>
                   {/* Image */}
                   
                   {/* <Image 
                    source = {GradeIcon} 
                    style={{
                        height: 20,
                        width: 20,
                        tintColor: '#fff',
                        marginRight: 10
                    }}
                   /> */}
                   <Text style={{
                       alignItems: 'center',
                       display: 'flex'
                   }}>
                   <GradeIcon style={{
                       color: "orange",
                       width: 20,
                       height: 20,
                       marginRight: 3
                   }}/> {item.rating}
                   </Text>
                   <View style={{
                       flexDirection: 'row',
                       marginLeft: 0
                   }}>
                       <Text style={{
                           marginLeft: 5,
                           backgroundColor: '#ddd',
                           width: 3,
                           height: 3,
                           borderRadius: 50,
                           marginRight: 5,
                           position: 'relative',
                           top: 8
                       }}></Text>
                       <Text>
                            {item.categories[0]}
                       </Text>
                       <Text style={{
                           marginLeft: 5,
                           backgroundColor: '#ddd',
                           width: 3,
                           height: 3,
                           borderRadius: 50,
                           marginRight: 5,
                           position: 'relative',
                           top: 8
                       }}></Text>
                       <Text>
                           {item.categories[1]}</Text>
                        <Text style={{
                           marginLeft: 5,
                           backgroundColor: '#ddd',
                           width: 3,
                           height: 3,
                           borderRadius: 50,
                           marginRight: 5,
                           position: 'relative',
                           top: 8
                            }}>
                       </Text>
                       <Text>
                           {item.categories[2]}
                        </Text>
                        
                        
                        
                   </View>
                   <View style= {{
                       position: 'absolute',
                       right: 10,
                   }}>
                        <Text style={{
                            fontWeight: 700
                        }}>
                            {item.priceImage}{item.priceStaic}
                        </Text>
                   </View>

               </View>

           </TouchableOpacity>
       )
        return (
            <FlatList 
                data={restaurants}
                keyExtractor = {item => `${item.id}`}
                renderItem = {renderItem}
                contentContainerStyle = {{
                    paddingHorizontal: 15,
                    paddingBottom: 30
                }}
            />
        )
    }
    return (
        <SafeAreaView style = {styles.container}>
            {renderHeader()}
            {renderBannerImage()}
            {renderMainCategories()}
            {renderRestaurantTitle()}
            {renderRestaurantList()} 
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        elevation: 5,
        boxShadow: '0 13px 10px -15px'
    },
    dotStyle: {
        marginLeft: 5,
        backgroundColor: '#ddd',
        width: 5,
        height: 5,
        borderRadius: 50,
        marginRight: 5,
        position: 'relative',
        top: 8
    }
})

>>>>>>> cf655e0c3e810776603fb322fe5d6c8bed233b52
export default Home