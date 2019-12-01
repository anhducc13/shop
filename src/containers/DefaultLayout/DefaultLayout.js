import React, {Suspense, useEffect, useGlobal} from 'reactn';
import {Route, Switch} from 'react-router-dom';
import $ from 'jquery';
import DefaultHeader from './DefaultHeader';
import DefaultFooter from './DefaultFooter';
import Card from 'components/customers/Card';
import Home from 'views/Home';
import Products from 'views/Products';

export default () => {
  const loading = (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  const [, setCategories] = useGlobal('categories');

  useEffect(() => {
    $('#myBtn').on("click", function () {
      $('html, body').animate({scrollTop: 0}, 300);
    });
    const windowH = $(window).height() / 2;
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > windowH) {
        $("#myBtn").css('display', 'flex');
      } else {
        $("#myBtn").css('display', 'none');
      }
    });
  }, []);

  useEffect(() => {
    setCategories([
      {
        id: 1,
        name: 'Thời trang nam',
      },
      {
        id: 2,
        name: 'Thời trang nữ',
      },
      {
        id: 3,
        name: 'Phụ kiện',
      }
    ])
  }, []);

  return (
    <div className="app">
      <Suspense fallback={loading}>
        <DefaultHeader/>
        <Card/>
      </Suspense>
      <Suspense fallback={loading}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/products" component={Products}/>
        </Switch>
        {/* Back to top */}
        <div className="btn-back-to-top" id="myBtn">
          <span className="symbol-btn-back-to-top">
            <i className="zmdi zmdi-chevron-up"/>
          </span>
        </div>
      </Suspense>
      <Suspense fallback={loading}>
        <DefaultFooter/>
      </Suspense>
    </div>
  )
};
