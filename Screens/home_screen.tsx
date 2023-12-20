import React,{useState,useEffect} from 'react';
import { ScrollView, View,StyleSheet, Text, ImageBackground } from 'react-native';
import Card from './components/Card';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import SessionStorage from 'react-native-session-storage';
import Voting from './components/Voting';
import { API_URL } from './ApiUrl';

interface LoginProps {
  navigation: any;
  route: any;
}
function Home({navigation,route}:LoginProps) {
  const [pos, setpos] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setRefreshing(!refreshing);
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = await SessionStorage.getItem('token');
        const response = await axios.get('https://ae39-2409-40d0-100d-20b7-318c-44ea-9e3f-412a.ngrok-free.app/api/v1/post',
        {
          headers: {
            Authorization: `token ${token}`,
          },
        });
        setpos(response.data.results);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, [refreshing,navigation]);
  
  const handleUpvotePress = (id: number,upvotes: number) => async () => {
    setRefreshing(!refreshing);
    try {
      const token = await SessionStorage.getItem('token');
      const response = await axios.patch(
        `https://ae39-2409-40d0-100d-20b7-318c-44ea-9e3f-412a.ngrok-free.app/api/v1/post/${id}`,
        {
          upvotes : upvotes+1
        },
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      console.log('Upvote successful:', response.data);
      navigation.navigate('HomeTab');
    } catch (error) {
      console.error('Error upvoting post:', error);
    }
  };
  const handleDownvotePress = (id: number,downvotes: number) => async () => {
    setRefreshing(!refreshing);
    try {
      const token = await SessionStorage.getItem('token');
      const response = await axios.patch(
        `https://ae39-2409-40d0-100d-20b7-318c-44ea-9e3f-412a.ngrok-free.app/api/v1/post/${id}`,
        {
          downvotes : downvotes+1
        },
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      console.log('Upvote successful:', response.data);
      navigation.navigate('HomeTab');
    } catch (error) {
      console.error('Error upvoting post:', error);
    }
  };

  return (
    <ImageBackground style={{"backgroundColor":"#ffffff01"}} source={require('../static/images/backgroundopacity.png')}>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={{fontSize: 30, marginBottom: 20, color:"#000000",fontFamily:'Poppins-Bold', alignSelf:'flex-start',marginLeft:20, marginTop:10}}>
        Hot issues today
      </Text>
      {pos.map((card) => (
        <View key={card.id} style={styles.cardContainer}>
           <TouchableOpacity key={card.id} onPress={() => navigation.navigate('Details', {card})}>
          <Card
            title={card.title}
            description={card.description}
            imageUrl={card.image}
            postedBy={card.postedBy}
            locationUrl={card.locURL}
          />
          </TouchableOpacity>
          <View style={{backgroundColor:"#fff",marginTop:-20,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
            <Voting onUpvotePress={handleUpvotePress(card.id,card.upvotes)} upvoteCount={card.upvotes} onDownvotePress={handleDownvotePress(card.id,card.downvotes)} downvoteCount={card.downvotes}/>
          </View>
        </View>
      ))}
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#f4f6fc',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  cardContainer: {
    flex:1,
    backgroundColor: '#ffffff',
    marginBottom: 20,
    flexDirection:'column',
    alignItems:'center',
    'width':'100%'
  },
});

export default Home;
