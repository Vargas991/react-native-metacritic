import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";

export default function GameCard({ game }) {
  return (
    <View key={game.slug} style={styles.card}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.score}>{game.score}</Text>
      <Text style={styles.description}>{game.description}</Text>
      <Text style={styles.releaseDate}>{game.releaseDate}</Text>
    </View>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 300,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    marginTop: 5,
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 10,
  },
  description: {
    color: "#eee",
    fontSize: 16,
  },
  releaseDate: {
    color: "#fff",
    fontSize: 14,
  },
  score: {
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
  },
});
