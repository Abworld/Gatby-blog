import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Title from "./Title";
import Subtitle from "./Subtitle";

const BlockCard = (style, imageStyle) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={require("/Users/user/Desktop/Projects/blognews/assets/images 1.jpg")}
        style={[styles.image, imageStyle]}
      />
      <View style={styles.contentContainer}>
        <Title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          autem, ut vitae culpa maiores neque labore quia unde doloremque dicta
          dolorum recusandae. Adipisci sapiente laboriosam deleniti harum. Modi,
          eveniet nam!
        </Title>
        <Subtitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          autem, ut vitae culpa maiores neque labore quia unde doloremque dicta
          dolorum recusandae. Adipisci sapiente laboriosam deleniti harum. Modi,
          eveniet nam!
        </Subtitle>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
  },
  contentContainer: { padding: 5 },
});
export default BlockCard;
