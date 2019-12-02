import React, {useEffect} from 'react';

import FilterItem from './FilterItem';

export default (props) => {

  const { openFilter, handleChangePaneFilter } = props;

  return (
    <div className={`wrap-header-filter ${openFilter ? 'show-header-filter': ''}`}>
      <div className="s-full js-hide-filter" onClick={() => handleChangePaneFilter(false)}/>
      <div className="header-filter flex-col-l p-l-50 p-r-25">
        <div className="header-filter-title flex-w flex-sb-m p-b-8">
          <span className="mtext-103 cl2">
            Bộ lọc
          </span>
          <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04" onClick={() => handleChangePaneFilter(false)}>
            <i className="zmdi zmdi-close"/>
          </div>
        </div>
        <div className="header-filter-content flex-w js-pscroll">
          <div className="header-filter-wrapitem w-full">
            <FilterItem key={1} />
            <FilterItem key={2}/>
          </div>
          {/*<Collapse className="header-filter-wrapitem">*/}
          {/*  <FilterItem key={1} header="ductt" content="asfsdfsd"/>*/}
          {/*  <FilterItem key={2} header="ductt" content="asfsdfsd"/>*/}
          {/*  <FilterItem key={3} header="ductt" content="asfsdfsd"/>*/}
          {/*</Collapse>*/}
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
