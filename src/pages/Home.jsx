import React, { useEffect, useRef } from 'react';
import { useHistory, useParams } from 'react-router';

import { About, Gallery, Address } from '../components';

export default function Home() {
  const { location } = useParams();
  const history = useHistory();

  const aboutRef = useRef();
  const addressRef = useRef();

  useEffect(() => {
    switch (location) {
      case 'about':
        window.scrollTo({
          top: aboutRef.current.offsetTop,
          behavior: 'smooth',
        });
        break;
      case 'address':
        window.scrollTo({
          top: addressRef.current.offsetTop,
          behavior: 'smooth',
        });
        break;
      case undefined:
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        break;
      default:
        history.push('/');
        break;
    }
  }, [history, location]);

  return (
    <>
      <About ref={{ aboutRef }} />
      <Gallery />
      <Address ref={addressRef} />
    </>
  );
}
