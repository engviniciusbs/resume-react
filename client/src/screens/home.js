import React, { Fragment } from 'react';
import 'rbx/index.css';
import '../App.css';
import LayoutNavbar from '../components/navbar/index';
import LayoutFooter from '../components/footer/index';
import LayoutColumns from '../components/section';
import 'rbx/index.css';

const HomeScreen = () => {
    return (
        <Fragment>
            <LayoutNavbar/>
            <LayoutColumns/>
            <LayoutFooter/>
        </Fragment>
    );
};

export default HomeScreen

// function App() {
//   return (
//       <Fragment>
//         <LayoutNavbar/>
//         <LayoutColumns/>
//         <LayoutFooter/>
//       </Fragment>
//   );
// }