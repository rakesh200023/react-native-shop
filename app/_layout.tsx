import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/components/useColorScheme";
import {
  Box,
  GluestackUIProvider,
  ScrollView,
  Text,
  VStack,
  View,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    //   <Stack>
    //     <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    //     <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    //   </Stack>
    // </ThemeProvider>
    <GluestackUIProvider config={config}>
      {/* <SafeAreaView style={styles.safearea}> */}
      <View flex={1}>
        <ThemeProvider
          value={colorScheme === "dark" ? DefaultTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: "card" }} />
          </Stack>
        </ThemeProvider>
      </View>
      {/* <View>
        <ScrollView>
          <Box
            width="100%"
            justifyContent="center"
            alignItems="center"
            style={styles.box}
          >
            <Text>Open up App.js to start working on your app!</Text>
          </Box>

          <Box
            w="$full"
            h="$80"
            justifyContent="center"
            backgroundColor="yellow"
          >
            <VStack space="md" reversed={false}>
              <Box w="$20" h="$20" bg="$blue300">
                <Text>Open up App.js to start working on your app!</Text>
              </Box>
              <Box w="$20" h="$20" bg="$blue400" />
              <Box w="$20" h="$20" bg="$blue500" />
            </VStack>
          </Box>
        </ScrollView>
      </View> */}
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    // flexDirection: "column",
    backgroundColor: "pink",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    flex: 1,
    // margin: 40,
    // marginRight: 90,
    // marginLeft: 90,
    backgroundColor: "red",
    borderColor: "white",
    borderWidth: 8,
    borderRadius: 19,
  },
});
