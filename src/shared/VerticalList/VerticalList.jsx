// @flow

import React, { memo } from 'react';

import styles from './VerticalList.scss';

export const VerticalList = memo<HTMLUListElement>(
    (props: HTMLUListElement) => <ul {...props} className={styles.list} />
);

export const VerticalListItem = memo<HTMLLIElement>((props: HTMLLIElement) => (
    <li {...props} className={styles.item} />
));
