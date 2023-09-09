'use client';
import 'bulma/css/bulma.min.css';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import SearchCard from './components/SearchCard';


export default function Home() {

  return (
    <div className='container is-flex is-justify-content-center is-align-items-center' id={styles.search}>
      <SearchCard />
    </div>


  );
}
