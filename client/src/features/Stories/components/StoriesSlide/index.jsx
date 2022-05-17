import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import MeowAvatar from '../../../../global/components/MeowAvatar';
// import PropTypes from 'prop-types';

// StoriesSlide.propTypes = {

// };

function StoriesSlide(props) {
   const storiesArray = [
      {
         name: 'RileyReid',
         avatar:
            'https://img.freepik.com/free-photo/dreamy-young-woman-sunglasses-looking-front_197531-16739.jpg?w=2000',
      },
      {
         name: 'Bad',
         avatar:
            'https://media.istockphoto.com/photos/always-smile-picture-id1314415203?b=1&k=20&m=1314415203&s=170667a&w=0&h=_Oe7Mg-mUin-pgfRIrpoDrwS1rfXM0jvCrrx5CS7bxs=',
      },
      {
         name: 'Bitch',
         avatar:
            'https://iso.500px.com/wp-content/uploads/2020/08/stock-photo-240662573.jpg',
      },
      {
         name: 'Thanh',
         avatar:
            'https://img.freepik.com/free-photo/dreamy-young-woman-sunglasses-looking-front_197531-16739.jpg?w=2000',
      },
      {
         name: 'Nguyen',
         avatar:
            'https://media.istockphoto.com/photos/always-smile-picture-id1314415203?b=1&k=20&m=1314415203&s=170667a&w=0&h=_Oe7Mg-mUin-pgfRIrpoDrwS1rfXM0jvCrrx5CS7bxs=',
      },
      {
         name: 'Tiu',
         avatar:
            'https://iso.500px.com/wp-content/uploads/2020/08/stock-photo-240662573.jpg',
      },
      {
         name: 'Win',
         avatar:
            'https://img.freepik.com/free-photo/dreamy-young-woman-sunglasses-looking-front_197531-16739.jpg?w=2000',
      },
      {
         name: 'Thong',
         avatar:
            'https://media.istockphoto.com/photos/always-smile-picture-id1314415203?b=1&k=20&m=1314415203&s=170667a&w=0&h=_Oe7Mg-mUin-pgfRIrpoDrwS1rfXM0jvCrrx5CS7bxs=',
      },
      {
         name: 'Thin',
         avatar:
            'https://iso.500px.com/wp-content/uploads/2020/08/stock-photo-240662573.jpg',
      },
      {
         name: 'a',
         avatar:
            'https://img.freepik.com/free-photo/dreamy-young-woman-sunglasses-looking-front_197531-16739.jpg?w=2000',
      },
      {
         name: 'b',
         avatar:
            'https://media.istockphoto.com/photos/always-smile-picture-id1314415203?b=1&k=20&m=1314415203&s=170667a&w=0&h=_Oe7Mg-mUin-pgfRIrpoDrwS1rfXM0jvCrrx5CS7bxs=',
      },
      {
         name: 'c',
         avatar:
            'https://iso.500px.com/wp-content/uploads/2020/08/stock-photo-240662573.jpg',
      },
      {
         name: 'd',
         avatar:
            'https://img.freepik.com/free-photo/dreamy-young-woman-sunglasses-looking-front_197531-16739.jpg?w=2000',
      },
      {
         name: 'e',
         avatar:
            'https://media.istockphoto.com/photos/always-smile-picture-id1314415203?b=1&k=20&m=1314415203&s=170667a&w=0&h=_Oe7Mg-mUin-pgfRIrpoDrwS1rfXM0jvCrrx5CS7bxs=',
      },
      {
         name: 'f',
         avatar:
            'https://iso.500px.com/wp-content/uploads/2020/08/stock-photo-240662573.jpg',
      },
      {
         name: 'g',
         avatar:
            'https://img.freepik.com/free-photo/dreamy-young-woman-sunglasses-looking-front_197531-16739.jpg?w=2000',
      },
      {
         name: 'h',
         avatar:
            'https://media.istockphoto.com/photos/always-smile-picture-id1314415203?b=1&k=20&m=1314415203&s=170667a&w=0&h=_Oe7Mg-mUin-pgfRIrpoDrwS1rfXM0jvCrrx5CS7bxs=',
      },
      {
         name: 'i',
         avatar:
            'https://iso.500px.com/wp-content/uploads/2020/08/stock-photo-240662573.jpg',
      },
   ];

   return (
      <Box w='full'>
         <Swiper
            freeMode={true}
            breakpoints={{
               390: {
                  slidesPerView: 4,
                  spaceBetween: 5,
               },
               640: {
                  slidesPerView: 5,
                  spaceBetween: 5,
               },
               768: {
                  slidesPerView: 5,
                  spaceBetween: 5,
               },
               1024: {
                  slidesPerView: 8,
                  spaceBetween: 5,
               },
            }}
         >
            {storiesArray.map((stories) => (
               <SwiperSlide key={stories.name}>
                  <VStack>
                     <MeowAvatar
                        src={stories.avatar}
                        outline={true}
                        width='65px'
                        height='65px'
                     />
                     <Text>{stories.name}</Text>
                  </VStack>
               </SwiperSlide>
            ))}
         </Swiper>
      </Box>
   );
}

export default StoriesSlide;
