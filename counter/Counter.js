import { View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ marginBottom: 40 }}>
        <Text
          style={{
            fontSize: 50,
            fontWeight: "bold",
          }}
        >
          {count}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "70%",
        }}
      >
        <TouchableOpacity
          style={{
            borderWidth: 2,
            paddingHorizontal: 18,
            paddingVertical: 5,
            borderRadius: 20,
          }}
          onPress={() => dispatch(decrement())}
        >
          <Text style={{ fontSize: 50 }}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            paddingHorizontal: 15,
            paddingVertical: 5,
            borderRadius: 20,
          }}
          onPress={() => dispatch(increment())}
        >
          <Text style={{ fontSize: 50 }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Counter;
