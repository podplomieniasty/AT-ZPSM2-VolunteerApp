import { ScrollView, Text } from "react-native";
import { RootStackParamList } from "../../assets/RootStackParamList";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

type Props = NativeStackScreenProps<RootStackParamList, 'ProfileScreen', 'AppStack'>['route'];

const ProfileScreen = () => {
    const [userId, setUserId] = useState(0);
    const route: Props = useRoute();
    
    useEffect(() => {
        setUserId(route.params.userId);
    });
    return(
        <ScrollView>
            <Text>{userId}</Text>
        </ScrollView>
    )
}

type User = {
    id?: number;
    username?: string;
    fullname?: string;
    number?: string;
    password?: string;
    image?: string;
}

export default ProfileScreen;