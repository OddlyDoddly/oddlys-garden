import React from 'react';
import styles from './styles.module.css';

export default function AuthorSignature(): JSX.Element {
  return (
    <div className={styles.authorSignature}>
      <h4 className={styles.writtenByHeader}>Written By</h4>
      <div className={styles.authorInfo}>
        <img
          src="https://github.com/OddlyDoddly.png"
          alt="OddlyDoddly's profile picture"
          className={styles.profilePic}
        />
        <div className={styles.authorNames}>
          <span className={styles.penName}>@OddlyDoddly</span>
          <span className={styles.realName}>Dylan Dodds</span>
        </div>
      </div>
    </div>
  );
}
