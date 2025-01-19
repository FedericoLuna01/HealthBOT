import { View, Text, FlatList, useWindowDimensions, Image, Animated } from 'react-native'
import React, { useState, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const DATA = [
  {
    id: '1',
    title: 'Welcome to Healthbot',
    description: 'Control your health from the palm of your hand',
    image: require("../assets/images/onboarding/onboarding-1.png")
  },
  {
    id: '2',
    title: 'Get started',
    description: 'Sign in to Healthbot',
    image: require("../assets/images/onboarding/onboarding-2.png")
  },
  {
    id: '3',
    title: 'Third item',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, unde.",
    image: require("../assets/images/onboarding/onboarding-3.png")
  },
]

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null)

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index)
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <SafeAreaView
      className='flex-1'
    >
      <FlatList
        data={DATA}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={
          Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )
        }
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
    </SafeAreaView>
  )
}

export default Onboarding

const OnboardingItem = ({ item }: { item: typeof DATA[0] }) => {
  const { width } = useWindowDimensions()
  return (
    <View
      style={{
        width,
      }}
      className='flex-1 items-center justify-between py-[10%]'
    >
      <Image
        source={item.image}
        className='h-80 flex-[80%] text-xl'
        style={{
          width: width,
          // height: '80%',
          resizeMode: 'contain',
          // alignSelf: 'center',
        }}
      />
      <View>
        <Text className='text-4xl font-bold mt-10 text-primary text-center'>{item.title}</Text>
        <Text className='pb-32 text-muted text-center'>{item.description}</Text>
      </View>
    </View>
  )
}