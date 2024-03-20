import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../assets/RootStackParamList";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import sampleDB from '../../assets/sampleDB.json';
import { GlobalStylesheet } from "../../assets/GlobalStyles";
import { Pet, Post, User } from "../../assets/Types";
import { PrimaryPalette } from "../../assets/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = NativeStackScreenProps<RootStackParamList, 'ProfileScreen', 'AppStack'>['route'];
const palette = PrimaryPalette;

const ProfileScreen = () => {
    const [userId, setUserId] = useState(0);
    const [user, setUser] = useState<User | undefined>({});
    const [imgURI, setURI] = useState<String | null | undefined>(null);
    const [loaded, setLoaded] = useState(false);
    const [focusedOnTasks, setFocusedOnTasks] = useState(true);
    
    const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
    const [relatedPets, setRelatedPets] = useState<Pet[]>([]);

    const route: Props = useRoute();
    const navigation = useNavigation();
    
    useEffect(() => {
        setUserId(route.params.userId);
        setUser(sampleDB.users.find(x => x.id === userId));
        setURI(user?.image);

        if(user) setLoaded(true);
    });

    return(
        <ScrollView style={[GlobalStylesheet.baseContainer]}
            contentContainerStyle={GlobalStylesheet.centeredFlex}>
            <TouchableOpacity style={{alignSelf: 'flex-start'}} onPress={() => navigation.goBack()}>
                <Image 
                    source={require('../../assets/images/back.png')} 
                    style={[styles.icon]} />
            </TouchableOpacity>
            {
                loaded && (
                    <SafeAreaView>
                        <SafeAreaView style={[styles.upperContainer, {padding: 10}]}>
                            <Image source={imgURI ? {uri: imgURI} : require('../../assets/images/paw.png')} style={styles.profilepic} />
                            <Text style={GlobalStylesheet.h1}>{user?.fullname}</Text>
                            <Text style={[GlobalStylesheet.h4, {color: 'gray'}]}>@{user?.username}</Text>
                            <SafeAreaView style={styles.containerInUpperContainer}>
                                <View style={styles.subContainer}>
                                    <Image 
                                        source={require('../../assets/images/telephone.png')}
                                        style={styles.icon}/>
                                    <Text style={GlobalStylesheet.h2}>{user?.number}</Text>
                                </View>
                                <View style={styles.subContainer}>
                                    <Image 
                                        source={require('../../assets/images/telephone.png')}
                                        style={styles.icon}/>
                                    <Text style={GlobalStylesheet.h2}>what should go here</Text>
                                </View>
                            </SafeAreaView>
                        </SafeAreaView>

                        <SafeAreaView style={styles.upperContainer}>
                            <View style={styles.buttonsWrapper}>
                                <TouchableOpacity 
                                    style={{
                                        width: '50%', 
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: focusedOnTasks ? palette.BACKGROUND_ALT : palette.BACKGROUND_HIGHLIGHT}}
                                        onPress={() => setFocusedOnTasks(true)}>
                                    <Text style={GlobalStylesheet.h4}>My tasks</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={{
                                        width: '50%', 
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: !focusedOnTasks ? palette.BACKGROUND_ALT : palette.BACKGROUND_HIGHLIGHT}}
                                        onPress={() => setFocusedOnTasks(false)}>
                                    <Text style={GlobalStylesheet.h4}>My pets</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.subWrapper}>
                            {
                                focusedOnTasks ? (
                                    relatedPosts.filter(post => post.postBy === userId).map((post, index) => (
                                        <View key={index}>
                                            <Text>{post.type}</Text>
                                        </View>
                                    ))
                                ) : (
                                    relatedPets.map((post, index) => (
                                        <View key={index}><Text>{post.name}</Text></View>
                                    ))
                                )
                            }
                            </View>
                            
                        </SafeAreaView>
                    </SafeAreaView>
                    

                )
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    profilepic: {
        width: 128,
        height: 128,
        
        borderRadius: 128 / 2,
        borderWidth: 4,
        borderColor: palette.BACKGROUND_HIGHLIGHT,
    },
    upperContainer: {
        backgroundColor: palette.BACKGROUND_ALT,

        width: '100%',
        marginTop: 30,

        borderRadius: 20,
        alignItems: 'center',
        overflow: 'hidden',
    },
    icon: {
        width: 32,
        height: 32,
        marginBottom: 5,
    },
    containerInUpperContainer: {
        marginTop: 20,
        width: '100%',
        display: 'flex',
        flexDirection: 'row'
    },
    subContainer: {
        alignItems: 'center',
        width: '50%',
    },
    buttonsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        height: 32,
    },
    subWrapper: {
        minHeight: 128,
    }
})

export default ProfileScreen;