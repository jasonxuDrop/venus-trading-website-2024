// This page for displaying Lineden product list. 

import LinedenProducts from "../components/LinedenProducts";

const LinedenProductsPage = () => {
  return (
    <div className="pt-[64px] pb-[128px] lg:py-[192px] bg-navbarcolor min-h-[calc(100vh-72px-356px)]" id="lineden">
      <LinedenProducts />
    </div>
  );
};

export default LinedenProductsPage;
