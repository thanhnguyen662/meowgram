import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import './PostCardImage.scss';

const PostCardImage = () => {
   const imgArray = [
      {
         id: 1,
         photoURL:
            'https://i.vietgiaitri.com/2021/8/5/mv-take-my-breath-cua-the-weeknd-co-gi-ma-bi-nghi-ngo-co-nguy-co-gay-dong-kinh-e32-5938690.jpg',
      },
      {
         id: 2,
         photoURL:
            'https://vtv1.mediacdn.vn/thumb_w/640/2019/12/4/the-weeknd-1-1024x576-1575432262739809599893.jpg',
      },
   ];

   return (
      <Box w='full' position='relative' className='post-card--image'>
         <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={0}
            freeMode={true}
            autoHeight={true}
            style={{ borderRadius: 15 }}
            navigation={{
               nextEl: '.next',
               prevEl: '.prev',
               disabledClass: 'lock',
            }}
         >
            {imgArray.map((stories) => (
               <SwiperSlide key={stories.id}>
                  <Image src={stories.photoURL} w='full' h='full' />
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
