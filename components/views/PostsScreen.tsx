import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GlobalStylesheet } from "../../assets/GlobalStyles";
import sampleDB from '../../assets/sampleDB.json';
import { PrimaryPalette } from "../../assets/Colors";
import { PetWalkPostPreview, PostProps } from "../Posts/Posts";

const palette = PrimaryPalette;

const mapPost = (elem: PostProps, key: any) => {
    switch(elem.type) {
        case "Pet walk": return <PetWalkPostPreview {...elem} key={key}/>; break;
    }
}

const PostsScreen = () => {
    return(
            <ScrollView style={GlobalStylesheet.baseContainer}>
            <Text style={GlobalStylesheet.h1}>What's cookin', good lookin'?</Text>

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
            </ScrollView> 
    )
}

export default PostsScreen;