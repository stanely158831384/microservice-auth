import React from "react";
import Footer from "../../components/test/footer";
import WyzeIntrodution from "../../components/test/wyzeIntroduction/introduction";
import PriceSelection from "../../components/test/priceSelection/priceSelection";
import UploadModal from "../../components/test/modal/contactUsModal/contactUsModal";
export default function cameraSecurity() {
  return (
    <div style={{ overflow: "hidden" }}>
      <section id="introduction">
        <WyzeIntrodution />
      </section>
      <section id="wyzeIntroduction">
        <PriceSelection />
      </section>
      <section id="contactModal">
        <UploadModal />
      </section>
    </div>
  );
}
