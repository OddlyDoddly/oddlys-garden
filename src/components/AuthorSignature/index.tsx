import React from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';

export default function AuthorSignature(): JSX.Element {
  const {metadata, frontMatter} = useDoc();
  
  // Format date helper
  const formatDate = (date: string | number | Date | null | undefined): string | null => {
    if (!date) return null;
    try {
      const dateObj = typeof date === 'number' ? new Date(date) : new Date(date as string);
      return dateObj.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch {
      return null;
    }
  };

  const writtenDate = formatDate(frontMatter.date as string);
  const lastUpdatedDate = metadata.lastUpdatedAt ? formatDate(metadata.lastUpdatedAt) : null;
  const lastUpdatedAuthor = metadata.lastUpdatedBy;

  return (
    <div className={styles.authorSignature}>
      <div className={styles.signatureContent}>
        <div className={styles.authorSection}>
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
        <div className={styles.metadataSection}>
          {writtenDate && (
            <div className={styles.metadataItem}>
              <span className={styles.metadataLabel}>Written:</span>
              <span className={styles.metadataValue}>{writtenDate}</span>
            </div>
          )}
          {lastUpdatedDate && (
            <div className={styles.metadataItem}>
              <span className={styles.metadataLabel}>Last Updated:</span>
              <span className={styles.metadataValue}>
                {lastUpdatedDate}
                {lastUpdatedAuthor && ` by ${lastUpdatedAuthor}`}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
