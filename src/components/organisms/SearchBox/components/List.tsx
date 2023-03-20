import { Starship } from '@/api/types/Starship';
import { Routes } from '@/types/route';
import { getStarshipIdFromUrl } from '@/utils/getStarshipId';

import styles from './List.module.scss';

import Arrow from '../assets/arrow.svg';

export interface ListProps {
  results: Starship[];
}

function List(props: ListProps) {
  const { results } = props;

  return (
    <ul className={styles.list}>
      {results.map((result) => (
        <li key={`${result.url}-search`}>
          <a
            className={styles.resultItemLink}
            href={`${Routes.STARSHIP}/${getStarshipIdFromUrl(result.url)}`}
          >
            {result.name}
            <Arrow className={styles.arrow} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default List;
