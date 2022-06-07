import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import MeowAvatar from '../../../../global/components/MeowAvatar';
import ProfileHeaderDescription from './subComponents/ProfileHeaderDescription';
import ProfileHeaderStats from './subComponents/ProfileHeaderStats';

const ProfileHeader = () => {
   const breakpoint = useBreakpointValue({ base: 'base', md: 'md' });

   return (
      <Grid
         templateColumns={'repeat(20, 1fr)'}
         gap={{ base: '22px 10px', md: 8 }}
         w='full'
         alignItems={{ base: 'center', md: 'start' }}
         justifyContent={{ base: 'center', md: 'start' }}
      >
         <GridItem colSpan={{ base: 6, md: 3 }}>
            <MeowAvatar
               outline={true}
               width='100%'
               height='100%'
               src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80'
            />
         </GridItem>

         {breakpoint === 'md' ? (
            <>
               <GridItem colSpan={9}>
                  <ProfileHeaderDescription />
               </GridItem>

               <GridItem colSpan={8} h='full'>
                  <ProfileHeaderStats />
               </GridItem>
            </>
         ) : (
            <>
               <GridItem colSpan={14} h='full'>
                  <ProfileHeaderStats />
               </GridItem>
               <GridItem colSpan={20}>
                  <ProfileHeaderDescription />
               </GridItem>
            </>
         )}
      </Grid>
   );
};

export default ProfileHeader;
