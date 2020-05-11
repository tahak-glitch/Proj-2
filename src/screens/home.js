import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar, ImageBackground, TextInput, FlatList} from 'react-native'
import React, {useRef, useState, useEffect} from 'react'
import Carousel from 'react-native-anchor-carousel'
import {FontAwesome5, Feather, MaterialIcons} from '@expo/vector-icons'

const App = () => {

const [background,setBackground] = useState({
url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zecjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9',
name: 'Avengers: End Game',
stat: '2019 Action/Sci-fi - 3h 2m',
desc: 'After Thanos, an integrated warrior.'
})

const [gallery, setgallery] = useState([
    { 
       image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zecjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9',
       title: ' End Game',
       released: '2019',
       desc: 'Describe your movie here',
       key: '1' 
  }
  ]);

const [list, setList ] = useState([
	{ image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FTakkloo-movie-scene-hollywood-Designer%2Fdp%2FB073XMK1HN&psig=AOvVaw2_ABZRrEG2ZXY2OPPexaYJ&ust=1589280237219000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjA1rrQq-kCFQAAAAAdAAAAABAD', key:'1'},
	{ image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.bookmyshow.com%2Fentertainment-news%2Fmovies%2Fhollywood%2Fbest-hollywood-movies-based-novels-watch&psig=AOvVaw2_ABZRrEG2ZXY2OPPexaYJ&ust=1589280237219000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjA1rrQq-kCFQAAAAAdAAAAABAI', key:'2'},
	]);

const carouselRef = useRef(null);
const {width,height} = Dimensions.get('window');
const renderItem = ({item, index}) => {
	return(
		<View>
		<TouchableOpacity onPress={() => {
			carouselRef.current.scrollToIndex(index);
			setBackground({
				uri: item.image,
				name: item.title,
				stat: item.released,
				desc: item.desc
			})
		}}
		>
		<Image source={{uri: item.image}} style={styles.carouselImage} />
		<Text style={styles.carouselText}>{item.title}</Text>
		<MaterialIcons name='library-add' size={30} color='white' style={styles.carouselIcon} />
		</TouchableOpacity>
		</View>
		)
}


  return (
  	<ScrollView style={{backgroundColor: '#000'}}>
  	<View style={styles.carouselContentContainer}>
    <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
    <ImageBackground
    source={{uri: background.uri }}
    style={styles.ImageBg}
    blurRadius={10}
    >
    <View style={styles.searchBoxContainer}>
    <TextInput
    placeholderTextColor='#666'
    style={styles.SearchBox}
    />

    <Feather name='search' size={22} color='#666' style={styles.searchBoxIcon} />

    </View>
    <Text style={{color: 'white',fontSize: 24, fontWeight: 'bold', marginLeft: 10, marginVertical: 10}}>Top Pics this Week </Text>
    <View style={styles.carouselContainerView}>
    <Carousel style={styles.Carousel}
    data={gallery}
    renderItem={renderItem}
    itemWidth={200}
    containerWidth={ width - 20}
    separatorWidth={0}
    ref={caroselRef}
    inActiveOpacity={0.4}
    />
   
    </View>

<View style={style.movieInfoContainer}>
<View style={{justifiedContent: 'center'}}>
<Text style={styles.movieName}>{background.name}</Text>
<Text style={styles.movieStat}>{background.stat}</Text>
</View>
<TouchableOpacity style={styles.playIconContainer}>
<FontAwesome5 name='play' size={22} color='#02ad94' style={{marginLeft: 4}} />
</TouchableOpacity>
</View>

<View style={{paddingHorizontal: 14,marginTop: 14}}>
<Text style={{color: 'white',opacity: 0.8,lineHeight: 20}}>
{background.desc}</Text>
</View>

    </ImageBackground>
    </View> 
    </View>

<View style={{marginHorizontal: 14}}>
<Text style={{color:'white',fontSize: 24,fontWeight: 'bold',marginBottom: 24}}>Continue Watching</Text>
<ImageBackground source={{uri:'https://www.thehindu.com/entertainment/movies/4xicg2/article26618002.ece/ALTERNATES/LANDSCAPE1200/how-to-train-your-dragon'}}
style={{height: 250, width: '100%', backgroundColor: '#000'}}
resizeMode='cover'
/>
<Text style={{color: 'white', padding: 14}}>How to train your dragon: the hiddden world</Text>

<TouchableOpacity style={{...styles.playIconContainer, position: 'absolute', top: '40%', right: '40%'}}>
<FontAwesome5 name='play' size={22} color='#02ad94' style={{marginLeft: 4}} />
</TouchableOpacity>
</View>
</ImageBackground> 

<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, marginTop: 36}}>
<Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>My List</Text>
<Text style={{color: 'white', fontSize: 14, fontWeight: 'normal'}}>View All</Text>
</View>


<FlatList
style={{marginBottom: 30}}
data={list} 
horizontal={true}
renderItem={({item}) => {
	return(
	<TouchableOpacity style={{marginRight: 20}}>
	<Image source={{uri: item.image}} style={{height: 300, width: 200}}
	/>
	<View style={{position: 'absolute', height: 5, width: '100%', backgroundColor: '#02ad94', opacity: 0.8}}>
	
	<FontAwesome5 name='play' size={38} color='#fff' style={{position:'absolute',top: '45%',left: '45%', opacity: 0.9}} />
	</TouchableOpacity>
	)
}}
/>
	</View> 

    </ScrollView>
    ); 
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  carouselContentContainer: {
  	flex: 1,
  	backgroundColor: '#000',
  	height: 720,
  	paddingHorizontal: 14
  },
  ImageBg: {
  	flex: 1,
  	height: null,
  	opacity: 1,
  	justifyContent: 'flex-start'
  },
  searchBoxContainer: {
  	backgroundColor: '#fff',
  	elevation: 10,
  	borderRadius: 4,
  	marginVertical: 10,
  	width: '95%',
  	flexDirection: 'row',
  	alignSelf: 'center'
  },
  SearchBox: {
  	padding: 12,
  	paddingLeft: 20,
  	fontSize: 16
  },
  searchBoxIcon: {
  	position: 'absolute',
  	right: 20,
  	top: 14
  },
  carouselContainerView: {
  	width: '100%',
  	height: 350,
  	justifyContent: 'center',
  	alignItems: 'center'
  },
  Carousel: {
  	flex: 1,
  	overflow: 'visible'
  },
  carouselImage: {
  	width: 200,
  	height :320,
  	borderRadius: 10,
  	alignSelf: 'center',
  	backgroundColor: 'rgba(0,0,0,0.9)'
  },
  carouselText: {
  	padding: 14,
  	color: 'white',
  	position: 'absolute',
  	bottom: 10,
  	left: 2,
  	fontWeight: 'bold'
  },
  carouselIcon: {
  	position: 'absolute',
  	top: 15,
  	right: 15
  },
  movieInfoContainer: {
  	flexDirection: 'row',
  	marginTop: 16,
  	justifyContent: 'space-between',
  	width: Dimensions.get('window').width - 14
  },
  movieName: {
  	paddingLeft: 14,
  	color:'white',
  	fontWeight: 'bold',
  	fontSize: 20,
  	marginBottom: 6
  },
  movieStat: {
  	paddingLeft: 14,
  	color:'white',
  	fontWeight: 'bold',
  	fontSize: 20,
  	opacity: 0.8
  },
  playIconContainer: {
  	backgroundColor: '#212121',
  	padding: 18,
  	borderRadius: 40,
  	justifyContent: 'center',
  	alignItems: 'center',
  	elevation: 10,
  	borderWidth: 4,
  	borderColor: 'rgba(2,173,148,0.2)',
  	marginBottom: 14
  }
})
export default App;