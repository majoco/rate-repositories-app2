import React from 'react'
import { Image, View, StyleSheet, Platform } from 'react-native'
import StyledText from './StyledText.jsx'
import RepositoryStats from './RepositoryStats.jsx'
import theme from '../theme.js'


const RepositoryItemHeader = (props) => (
    <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
        <View style={{ paddingRight: 10 }}>
            <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }}/>
        </View>
        <View style={{ flex: 1 }}>
            <StyledText fontWeight='bold'>{props.fullName}</StyledText>        
            <StyledText color='secondary'>{props.description}</StyledText>
            <StyledText style={styles.language}>{props.language}</StyledText>
        </View>
    </View>
)

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>        
    <RepositoryItemHeader {...props} />
        <RepositoryStats {...props} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingVertical: 5        
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        //backgroundColor: theme.colors.primary,
        //backgroundColor: Platform.OS === 'android' ? 'red' : '#09f',
        backgroundColor: Platform.select({
            android: theme.colors.primary,
            ios: 'orange',
            default: 'purple'
        }),
        alignSelf: 'flex-start',        
        marginVertical: 4,
        borderRadius: 4,
        overflow: 'hidden'
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
})

export default RepositoryItem