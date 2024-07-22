import { Image, View, Text } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused }: { icon: any, color: any, name: string, focused: boolean }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className="w-6 h-6"
      />
      <Text 
        className={`text-xs ${focused ? 'fton-psemibold' : 'font-pregular'}`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#2D9C74',
          tabBarInactiveTintColor: '#67D9A3',
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopColor: 'transparent',
            borderTopWidth: 1,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomColor: '#F1F1F1',
            borderBottomWidth: 1,
            height: 84
          }
        }}
      >
        <Tabs.Screen 
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen 
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                name="Bookmark"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen 
          name="create"
          options={{
            title: "Add Listing",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                name="Add Listing"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen 
          name="profile"
          options={{
            title: "Account",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Account"
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout 