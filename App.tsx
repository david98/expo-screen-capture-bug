import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as ScreenCapture from 'expo-screen-capture';
import { useEffect } from 'react';

export default function App() {
    const hasPermissions = async () => {
        const { status } = await ScreenCapture.requestPermissionsAsync();
        return status === 'granted';
    };

    useEffect(() => {
        let subscription: ScreenCapture.Subscription;

        const addListenerAsync = async () => {
            if (await hasPermissions()) {
                subscription = ScreenCapture.addScreenshotListener(() => {
                    alert('Thanks for screenshotting my beautiful app 😊');
                });
            } else {
                console.error('Permissions needed to subscribe to screenshot events are missing!');
            }
        };
        void addListenerAsync();

        return () => {
            subscription?.remove();
        };
    }, []);

    return (
        <View style={styles.container}>
            <Text>Take a screenshot.</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
