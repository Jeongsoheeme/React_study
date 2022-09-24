import styles from './search_header.module.css';
import React, { useRef } from 'react';

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

    const submenu = useRef();

    const submenu_btn = () => {
        if (submenu.current.style.display == 'none'){
            submenu.current.style.display = 'block';
        }else{
            submenu.current.style.display = 'none';
        }
        // submenu.current.style.display = 'block';
    };

    return(
        <header className={styles.header}>
            <img className={styles.img} src="/images/logo.png" alt="logo" />
            <input ref={inputRef} className={styles.input} type="search" placeholder="어디로 떠나고 싶으세요?" onKeyPress={onKeyPress} />
            <button className={styles.button} type="submit" onClick={onClick_search}>
                <img src="/images/search.png" alt="search" />
            </button>

            <div className={styles.topmenu_wrap} onClick={submenu_btn}>
                <a className={styles.topmenu} href="#"><img src="/images/menu.png" alt="menu" /></a>
                <ul className={styles.topmenu_category} ref={submenu}>
                    <li><a href="#">메세지</a></li>
                    <li><a href="#">마이트립</a></li>
                    <li><a className={styles.salemenu} href="#">판매내역</a></li>
                    <li><a href="#">구매내역</a></li>
                    <li><a href="#" className={styles.privacy}>마이페이지</a></li>
                    <li><a href="#">로그아웃</a></li>
                </ul>
            </div>
        </header>
    );
};

export default SearchHeader;