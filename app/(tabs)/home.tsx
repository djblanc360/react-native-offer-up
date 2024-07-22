import { View, Text, SafeAreaView, SectionList } from 'react-native'
import React from 'react'

import { Offer } from '../../models/offer'
import { User } from '../../models/user'

import ListItem from '../../components/ListItem'
import { format } from 'date-fns'

interface Section {
  title: string
  data: Offer[]
}

const users: User[] = [
  { id: 1, name: 'User 1', location: 'Anaheim' },
  { id: 2, name: 'User 2', location: 'Irvine' },
]

const offers: Offer[] = [
  { title: 'Offer 1', data: { id: 1, date: '2023-09-25', title: 'Offer 1', price: 100, lister: users[0].id } },
  { title: 'Offer 2', data: { id: 2, date: '2023-09-25', title: 'Offer 2', price: 200, lister: users[1].id } },
  { title: 'Offer 3', data: { id: 3, date: '2023-09-26', title: 'Offer 3', price: 300, lister: users[0].id } },
]

// format date
const formatDate = (dateString: string) : string => format(new Date(dateString), 'MMM dd')

// transform data for SectionList
const data: Section[] = offers.reduce((acc, offer) => {
  const date = formatDate(offer.data.date)
  const section = acc.find((section: any) => section.title === date)

  if (section) {
    section.data.push(offer)
  } else {
    acc.push({ title: date, data: [offer] })
  }

  return acc
}, [] as Section[])

// show all the most recent offers in a list
const Home = () => {
  return (
    <SafeAreaView>
      <SectionList
        sections={data}
        keyExtractor={(item) => item.data.id.toString()}
        renderItem={({ item }) => <ListItem title={item.title} />}
        style={{ padding: 10 }}
        renderSectionHeader={({ section: { title } }) => (
          <ListItem title={title} />
        )}
      />
    </SafeAreaView>
  )
}

export default Home
 