import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import './PostCardImage.scss';
import IMG1 from '../../../../../../temp_img/ig-4.jpg';
import IMG2 from '../../../../../../temp_img/ig-3.jpg';

const PostCardImage = () => {
   const imgArray = [
      {
         id: 1,
         photoURL: IMG1,
      },
      {
         id: 2,
         photoURL: IMG2,
      },
   ];

   return (
      <Box w='full' h='full' position='relative' className='post-card--image'>
         <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={0}
            freeMode={true}
            autoHeight={true}
            style={{
               borderRadius: 15,
               width: '100%',
               height: 'auto',
            }}
            centeredSlides={true}
            centeredSlidesBounds={true}
            centerInsufficientSlides={true}
            navigation={{
               nextEl: '.next',
               prevEl: '.prev',
               disabledClass: 'lock',
            }}
         >
            {imgArray.map((stories) => (
               <SwiperSlide key={stories.id}>
                  <Image src={stories.photoURL} w='full' objectFit='cover' />
               </SwiperSlide>
            ))}
            <SlideButton />
         </Swiper>
      </Box>
   );
};

const SlideButton = () => {
   return (
      <>
         <div className='prev'>
            <BsArrowLeftCircleFill />
         </div>
         <div className='next'>
            <BsArrowRightCircleFill />
         </div>
      </>
   );
};

export default PostCardImage;
