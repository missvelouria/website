import React from 'react';
import ReactDOM from 'react-dom';
import withAppLayout from '../layout/layout.js';
import Head from 'next/head';
import Footer from '../components/footer.js';

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <div>
      <p>Dare to indulge?</p>
      <button>Enter Site</button>
    </div>
    <style jsx>{`
      p {
        font-family: Snell Roundhand, Apple Chancery, cursive;
        font-size: 3em;
        color: #F4CDD6;
      }
    `}</style>
    <style jsx global>{`
      div {
        margin-top: 20%;
      }
      button {
        height: 3em;
        width: 8em;
        background-color: #F4CDD6
        color: #000;
        font-size: 1.5em;
        font-family: Snell Roundhand, Apple Chancery, cursive;
        font-weight: 300;
        line-height: 1.5em;
      }
      body {
        background: #000;
        font-family: Lato,sans-serif;
        font-weight: 300;
        line-height: 1.5em;
        color: #feece6;
        text-align: center;
      }
    `}</style>
  <Footer />


  </div>
)
