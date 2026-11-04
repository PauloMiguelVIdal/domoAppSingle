import { View, StyleSheet, Text, Pressable } from "react-native";
import { Link,router } from 'expo-router'
export default function About() {


const handleClick = () =>{
    router.navigate('/about')
}



    return (
        <View style={styles.container}>
            <Text>About</Text>
            <Link href='/about' asChild>
                <Pressable onPress={handleClick}>
                    <Text>Ir para sobre</Text>
                </Pressable>

            </Link>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333333'
    }
}) 

