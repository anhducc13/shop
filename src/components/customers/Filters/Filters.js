import React, {useEffect} from 'react';
import $ from 'jquery';

export default () => {
  useEffect(() => {
    /*==================================================================
    [ Cart ]*/
    $('.js-show-filter').on('click', function () {
      $('.js-panel-filter').addClass('show-header-filter');
    });

    $('.js-hide-filter').on('click', function () {
      $('.js-panel-filter').removeClass('show-header-filter');
    });
  }, []);

  return (
    <div className="wrap-header-filter js-panel-filter">
      <div className="s-full js-hide-filter"/>
      <div className="header-filter flex-col-l p-l-50 p-r-25">
        <div className="header-filter-title flex-w flex-sb-m p-b-8">
          <span className="mtext-103 cl2">
            Bộ lọc
          </span>
          <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-filter">
            <i className="zmdi zmdi-close"/>
          </div>
        </div>
        <div className="header-filter-content flex-w js-pscroll">
          <ul className="header-filter-wrapitem w-full">
            <li className="header-filter-item flex-w flex-t m-b-12"/>
          </ul>
          <div className="w-full">
            <div className="header-filter-buttons flex-w w-full">
              <a href="shoping-cart.html"
                 className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                Áp dụng
              </a>
              <a href="shoping-cart.html"
                 className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
                Xóa bỏ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
