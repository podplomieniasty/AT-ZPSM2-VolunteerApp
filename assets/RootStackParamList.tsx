export type RootStackParamList = {
    Login: {id: number} | undefined;
    Register: {id: number} | undefined;
    Home: {id: number} | undefined;
    Posts: {id: number} | undefined;
    PetWalkPost: {id: number} | undefined;
    SettingsScreen: {id: number} | undefined;
    ProfileScreen: {id: number, userId: number};
}

/**
 * Nie wiem, bez tego będzie ciągle krzyczeć
 * że nie można zrobić .navigate() do określonej ścieżki,
 * ukradłem ze stacka:
 * https://stackoverflow.com/questions/68667766/react-native-typescript-string-is-not-assignable-to-parameter-of-type-never
 */