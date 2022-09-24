import styles from './search_header.module.css';
import React, { useRef,useState } from 'react';
import React, { useState } from 'react';

const SearchHeader = ({onSearch}) => {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    };
    const onClick_search = () => {
        handleSearch();
    };

    const onKeyPress = (event) => {
        if (event.key === 'enter'){
            handleSearch(); 
        }
    };

    const [ topmenu_category, setSyle ] = useState({display: 'none'})

    return(
        <header className={styles.header}>
            <img className={styles.img} src="/images/logo.png" alt="logo" />
            <input ref={inputRef} className={styles.input} type="search" placeholder="Search..." onKeyPress={onKeyPress} />
            <button className={styles.button} type="submit" onClick={onClick_search}>
                <img src="/images/search.png" alt="search" />
            </button>

            <div className={styles.topmenu_wrap} 
            onMouseEnter={e => {setStyle({display: 'block'})
             }}
             onMouseLeave={e => {
                setStyle({display: 'none'})
             }}
        >
                <a className={styles.topmenu} href="#"><img src="/images/menu.png" alt="menu" /></a>
                <ul className={styles.topmenu_category}>
                    <li><a href="#">메세지</a></li>
                    <li><a href="#">마이트립</a></li>
                    <li><a className={styles.salemenu} href="#">판매내역</a></li>
                    <li><a href="#">구매내역</a></li>
                    <li><a href="#" className={styles.privacy}>마이페이지</a></li>
                    <li><a href="#">로그아웃</a></li>
                </ul>
            </div>
        </header>
    );;
};

export default SearchHeader;