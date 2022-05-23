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
import { useLocation, useNavigate } from 'react-router-dom';

const PostCardImage = ({ postImage }) => {
   const imgArray = postImage || [IMG1, IMG2];

   let location = useLocation();
   const navigate = useNavigate();

   const onDoubleClick = () => {
      console.log('double click');
   };

   const onClick = () => {
      navigate('/post/27', {
         state: { backgroundLocation: location },
      });
   };

   return (
      <Box
         w='full'
         h='full'
         position='relative'
         className='post-card--image'
         onDoubleClick={onDoubleClick}
         onClick={onClick}
      >
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
            grabCursor={true}
            navigation={{
               nextEl: '.next',
               prevEl: '.prev',
               disabledClass: 'lock',
            }}
         >
            {imgArray.map((stories, index) => (
               <SwiperSlide key={index}>
                  <Image src={stories} w='full' objectFit='cover' />
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
