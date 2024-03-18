import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GlobalStylesheet } from "../../assets/GlobalStyles";
import sampleDB from '../../assets/sampleDB.json';
import { PrimaryPalette } from "../../assets/Colors";

const palette = PrimaryPalette;

const mapPost = (elem: Post, key: any) => {
    switch(elem.type) {
        case "walk":
            const relatedUser = sampleDB.users.find(x => elem.postBy === x.id);
            const relatedPet = sampleDB.dogs.find(x => elem.postBy === x.id);
            return(
                <View style={styles.postContainer} key={key}>
                    <View>
                        <Image 
                            source={{uri: relatedUser?.image}}
                            style={styles.postUser}/>
                        <Image 
                            source={{uri: relatedPet?.image}}
                            style={styles.postDog}/>
                    </View>
                    <View>
                        <Text style={GlobalStylesheet.h4}>{elem.type}</Text>

                    </View>
                </View>
            )
    }
}

type Post = {
    id: number;
    postBy: number;
    type: string;
    dogs: number[];
}

const PostsScreen = () => {
    return(
        <ScrollView style={GlobalStylesheet.baseContainer}>
            {
                sampleDB.posts.map((post, index) => (
                    /**
                     * ten konkretny post jest dla sytuacji, gdzie jest
                     * zlecenie na wyprowadzenie piesa.
                     * koniecznie piesa, nie psa.
                     *  */
                    mapPost(post, index)
                ))
            }
            <Text>Posts!</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    postContainer: {
        margin: 20,
        padding: 10,

        minHeight: 150,

        backgroundColor: palette.BACKGROUND_ALT,
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

        position: 'relative',
        top: -32,
        left: 44,

        borderRadius: 50,
        borderWidth: 3,
        borderColor: palette.BACKGROUND_HIGHLIGHT,
    }
})

export default PostsScreen;