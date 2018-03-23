import React, { Component } from 'react';
//import { Header } from '../components';

const withAppLayout = () => (ComposedComponent) => {
  class AppLayout extends Component {
    render() {
      return (
        <section>
           // <Header />
           <ComposedComponent {...this.props} />
         </section>
      );
    }
  }

  return AppLayout;
};

export default withAppLayout;
