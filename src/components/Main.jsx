import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Text, View, Platform } from 'react-native'
import RepositoryList from './RepositoryList.jsx'
import AppBar from './AppBar'
//import { Redirect, Route, Switch } from 'react-router-native'

/*const AppBar = Platform.select({
    ios: () => require('./IOSAppBar.jsx').default,
    default: () => require('./AppBar.jsx').default
})()*/ 

import LoginPage from '../pages/Login.jsx'
import LoginPage2 from '../pages/Login2.jsx'


const Main = () => {
    return (
        <View style={{ flex: 1 }}>            
            <AppBar />
            <Routes>
                <Route path="/" element={
                    <RepositoryList/>
                } />
                <Route path="/signin" element={
                    <LoginPage />
                } />
                <Route path="/signin2" element={
                    <LoginPage2 />
                } />
                
            </Routes>
        </View>
    )
}

export default Main