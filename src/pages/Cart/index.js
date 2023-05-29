import { FlatList } from "react-native";
import { Item } from './components'

import { tickets } from '../../mocks';
import { StatusCartComponent } from "../../components";

export default function CartPage(){
    const total = tickets.reduce((sum, { price, quantity = 2 }) => {
        return sum += price * quantity;
    }, 0);

    return <>
        <StatusCartComponent total={total} />
        <FlatList
            data={tickets}
            keyExtractor={({ id }) => String(id)}
            removeClippedSubviews={false}
            renderItem={({ item }) => <Item { ...item }/>}
        />
    </>
       
}