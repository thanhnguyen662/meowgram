import {
   Avatar,
   Box,
   Heading,
   HStack,
   Spacer,
   Tag,
   Text,
   VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import MeowAvatar from '../../../../global/components/MeowAvatar';

const SuggestBar = () => {
   const [list, setList] = useState([
      {
         id: 1,
         name: 'Meganfox',
         username: 'actor',
         photoURL:
            'https://iso.500px.com/wp-content/uploads/2020/08/stock-photo-240662573.jpg',
      },
      {
         id: 2,
         name: 'Thong',
         username: 'daune',
         photoURL:
            'https://img.freepik.com/free-photo/dreamy-young-woman-sunglasses-looking-front_197531-16739.jpg?w=2000',
      },
      {
         id: 3,
         name: 'Thin',
         username: 'tee',
         photoURL:
            'https://media.istockphoto.com/photos/always-smile-picture-id1314415203?b=1&k=20&m=1314415203&s=170667a&w=0&h=_Oe7Mg-mUin-pgfRIrpoDrwS1rfXM0jvCrrx5CS7bxs=',
      },
   ]);

   return (
      <div>
         <VStack w='full' spacing='25px'>
            <HStack w='full'>
               <Heading fontSize='22px'>Suggestion today</Heading>
               <Spacer />
               <Text fontWeight='bold' fontSize='16px' color='gray.500'>
                  More
               </Text>
            </HStack>

            <VStack w='full' spacing='18px'>
               {list.map((item) => (
                  <HStack w='full' key={item.id} spacing='13px'>
                     <MeowAvatar
                        outline={false}
                        src={item.photoURL}
                        width='50px'
                        height='50px'
                     />
                     <VStack
                        alignItems='start'
                        justifyContent='start'
                        spacing={0}
                     >
                        <Text fontWeight='bold' fontSize='16px' lineHeight={1}>
                           {item.name}
                        </Text>
                        <Text
                           fontWeight='bold'
                           fontSize='15px'
                           color='gray.500'
                        >
                           {item.username}
                        </Text>
                     </VStack>
                     <Spacer />
                     <Tag
                        size='md'
                        variant='solid'
                        bg='#D4E7FC'
                        color='#2580EB'
                        lineHeight='1'
                     >
                        Follow
                     </Tag>
                  </HStack>
               ))}
            </VStack>
         </VStack>
      </div>
   );
};

export default SuggestBar;
