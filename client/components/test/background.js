
import Image from 'next/image'
import { bgWrap } from '../../styles/Home.module.css'
import Abstract from '/public/background2.jpg'

const Background = () => (
  <div>
    <div className={bgWrap}>
      <Image
        alt="Mountains"
        src="/background2.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  </div>
)

export default Background