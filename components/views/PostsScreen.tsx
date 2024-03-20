import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { GlobalStylesheet } from "../../assets/GlobalStyles";
import sampleDB from '../../assets/sampleDB.json';
import { PetWalkPostPreview} from "../Posts/Posts";
import { Post } from "../../assets/Types";


const mapPost = (elem: Post, key: any) => {
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