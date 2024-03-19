import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import sampleDB from '../../assets/sampleDB.json';
import { PrimaryPalette } from '../../assets/Colors';
import { GlobalStylesheet } from '../../assets/GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../assets/RootStackParamList';


const palette = PrimaryPalette;

const PetWalkPostPreview = (props: PostProps) => {
    const relatedUser = sampleDB.users.find(x => props.postBy === x.id);
    const relatedPets = sampleDB.dogs.filter(x => props.dogs.includes(x.id));

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

            return(
                <TouchableOpacity 
                    style={styles.postContainer}
                    onPress={() => navigation.navigate('PetWalkPost', {...props})}>
                    <View style={styles.upperRow}>
                            <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen', {userId: relatedUser?.id})}>
                                <Image 
                                    source={{uri: relatedUser?.image}}
                                    style={styles.postUser}/>
                            </TouchableOpacity>
                            
                            <Image 
                                source={{uri: relatedPets[0]?.image}}
                                style={styles.postDog}/>
                        <View>
                            <Text style={[GlobalStylesheet.h4, styles.postTitle]}>Help {relatedUser?.fullname.split(' ')[0]} with:</Text>
                            <Text style={[GlobalStylesheet.h2, styles.postTitle]}>{props.type} with {relatedPets[0].name}</Text>
                        </View>
                    </View>
                    
                    <View style={styles.bottomRow}>
                        <View style={styles.bottomRowContainer}>
                            <Image source={require('../../assets/images/calendar.png')} style={styles.icon}/>
                            <Text style={GlobalStylesheet.h4}>{props.deadlineDate}</Text>
                        </View>
                        <View style={styles.bottomRowContainer}>
                            <Image source={require('../../assets/images/clock.png')} style={styles.icon}/>
                            <Text style={GlobalStylesheet.h4}>{props.deadlineHour}</Text>
                        </View>
                        <View style={styles.bottomRowContainer}>
                            <Image source={require('../../assets/images/walkies.png')} style={styles.icon}/>
                            <Text style={GlobalStylesheet.h4}>{props.duration}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
}

const PetWalkPost = () => {
    return(
        <ScrollView>
            <Text>Chuj</Text>
        </ScrollView>
    )
}

type PostProps = {
    id: number;
    postBy: number;
    type: string;
    dogs: number[];
    createdOn: string;
    deadlineDate: string;
    deadlineHour: string;
    duration: string;
    details: string;
}

const styles = StyleSheet.create({
    postContainer: {
        margin: 20,
        padding: 10,



        backgroundColor: palette.BACKGROUND_ALT,
        borderRadius: 20,

    },
    postTitle: {
        marginLeft: 30,
        textShadowColor: palette.BACKGROUND_PRIMARY,
        textShadowRadius: 10,
        maxWidth: 210
    },
    postUser: {
        width: 64,
        height: 64,

        position: 'relative',

        borderRadius: 50,
        borderWidth: 3,
        borderColor: palette.BACKGROUND_HIGHLIGHT,
    },
    postDog: {
        width: 48,
        height: 48,

        position: 'absolute',
        top: 38,
        left: 38,

        borderRadius: 50,
        borderWidth: 3,
        borderColor: palette.BACKGROUND_HIGHLIGHT,
    },
    upperRow: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomColor: palette.BACKGROUND_HIGHLIGHT,
        borderBottomWidth: 1,
        paddingBottom: 30,
    },
    bottomRow: {
        padding: 7,
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    bottomRowContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '33%',
    },
    icon: {
        width: 32,
        height: 32,
        marginBottom: 3,
    }
})

export {PetWalkPostPreview, PetWalkPost};
export type {PostProps};