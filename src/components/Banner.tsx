import { Image } from '@chakra-ui/react'
import dynamics_banner from '../assets/dynamics_banner.avif'

const Banner = () => {
  return (
    <Image 
      src={dynamics_banner}
      w="100vw"           
      h="510px"
      objectFit="cover" 
    />
  )
}

export default Banner
