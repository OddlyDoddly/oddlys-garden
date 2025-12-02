import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import TagsListInline from '@theme/TagsListInline';
import EditMetaRow from '@theme/EditMetaRow';
import AuthorSignature from '@site/src/components/AuthorSignature';

export default function DocItemFooter(): JSX.Element | null {
  const {metadata} = useDoc();
  const {editUrl, tags} = metadata;
  const canDisplayTagsRow = tags.length > 0;
  // Don't show editUrl in EditMetaRow since AuthorSignature handles metadata
  const canDisplayEditMetaRow = !!editUrl;
  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;
  
  return (
    <>
      <AuthorSignature />
      {canDisplayFooter && (
        <footer
          className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}>
          {canDisplayTagsRow && (
            <div
              className={clsx(
                'row margin-top--sm',
                ThemeClassNames.docs.docFooterTagsRow,
              )}>
              <div className="col">
                <TagsListInline tags={tags} />
              </div>
            </div>
          )}
          {canDisplayEditMetaRow && (
            <EditMetaRow
              className={clsx(
                'margin-top--sm',
                ThemeClassNames.docs.docFooterEditMetaRow,
              )}
              editUrl={editUrl}
              // Don't pass lastUpdatedAt and lastUpdatedBy since AuthorSignature shows them
              lastUpdatedAt={undefined}
              lastUpdatedBy={undefined}
            />
          )}
        </footer>
      )}
    </>
  );
}
