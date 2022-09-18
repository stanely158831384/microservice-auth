import React from 'react'
import Footer from '../../components/test/footer'
import WyzeIntrodution from '../../components/test/wyzeIntroduction/introduction'
import PriceSelection from '../../components/test/priceSelection/priceSelection'
export default function cameraSecurity() {
  return (
    <div>
      <section id="introduction">
        <WyzeIntrodution />
      </section>
      <section id="wyzeIntroduction">
        <PriceSelection />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  )
}
