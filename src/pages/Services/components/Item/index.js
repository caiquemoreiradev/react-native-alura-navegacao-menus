import { useState } from "react";
import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import { InputIntergerComponent, ButtonComponent } from '../../../../components'

import styles from './styles'

export function Item({ name, price, description, time, poster, available }) {

    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(price);
    const [expand, setExpand] = useState(false);

    const updateQuantityAndTotal = (newQuantity) => {
        setQuantity(newQuantity);
        calcTotal(newQuantity);
    }

    const calcTotal = (newQuantity) => {
        setTotal(newQuantity * price);
    }

    const invertExpand = () => {
        setExpand(!expand);
        updateQuantityAndTotal(1);
    }

    return <>
        <TouchableOpacity style={styles.info} onPress={invertExpand}>

            <View style={styles.container}>
                <Image style={styles.moviePoster} source={poster} />

                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.description} numberOfLines={5}>{description}</Text>
                    <Text style={styles.detailTitle}>Horário: {time}</Text>
                    <Text style={styles.detailTitle}>Assentos disponíveis: {available}</Text>
                </View>
            </View>
        </TouchableOpacity>
        {
            expand &&
            <View style={styles.cart}>
                <View>
                    <View style={styles.value}>
                        <Text style={styles.detailTitle}>Quantidade:</Text>
                        <InputIntergerComponent
                            value={quantity}
                            setValue={updateQuantityAndTotal}
                            styles={styles.quantity}
                        />
                    </View>
                    <View style={styles.value}>
                        <Text style={styles.detailTitle}>Total:</Text>
                        <Text style={styles.price}>
                            {
                                Intl.NumberFormat('pt-BR', {
                                    style: 'currency', currency: 'BRL'
                                }).format(total)
                            }
                        </Text>
                    </View>
                </View>
                <ButtonComponent value={'Adicionar ao Carrinho'} action={
                    () => { }
                } />
            </View>
        }
        <View style={styles.divider} />
    </>
}