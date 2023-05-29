import { FlatList } from "react-native";
import { Item } from './components'

import { tickets } from '../../mocks';

export default function ServicesPage(){
    return <>
        <FlatList
            data={tickets}
            keyExtractor={({ id }) => String(id)}
            removeClippedSubviews={false}
            renderItem={({ item }) => <Item { ...item }/>}
        />
    </>
}