import styles from './search_category.module.css'
import React from 'react';

const Search_Category = (props) => (
    <div className={styles.category_wrap}>
        <p className={styles.category_title}>어디로 떠나고 싶으세요?</p>
        <ul className={styles.category_menu}>
            <li className={styles.category01}>목적지</li>
            <li className={styles.category02}>날짜</li>
            <li className={styles.category03}>인원수</li>
        </ul>
    </div>
);

export default Search_Category;