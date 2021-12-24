import React from "react";
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

function AppBar(){
    return (
        <>
            <StatusBar backgroundColor="#3700B3" barStyle="light-content" />

            <Box safeAreaTop backgroundColor="#6200ee" />

            <HStack bg='#6200ee' px="1" py="3" justifyContent='space-between' alignItems='center'>
                <HStack space="4" alignItems='center'>
                    <IconButton icon={<Icon size="sm" as={<MaterialIcons name='menu' />} color="white" />} />
                    <Text color="white" fontSize="20" fontWeight='bold'>Колода</Text>
                </HStack>
            </HStack>
        </>
    )
}

export default AppBar