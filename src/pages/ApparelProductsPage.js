// This page for displaying Apparel product list. 

import ApparelProducts from "../components/ApparelProducts";

const ApparelProductsPage = () => {
  return (
    <div className="pt-[64px] pb-[128px] lg:py-[192px] bg-navbarcolor min-h-[calc(100vh-72px-356px)]" id="apparel">
      <ApparelProducts />
    </div>
  );
};

export default ApparelProductsPage;
