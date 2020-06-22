import React from "react"
import { Window, Text, View } from "@nodegui/react-nodegui"

export default () => (
  <Window>
    <View id="container" styleSheet={require("./style.scss")}>
      <Text id="text">Hello, World!</Text>
    </View>
  </Window>
)
