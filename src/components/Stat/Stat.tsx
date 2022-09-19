import s from './Stat.module.css';
import { Stats } from '../Stats/Stats';
import React from 'react';

interface IProp {
  id:string,
  label: string,
  percentage: number
}

interface IData {
  data: IProp[];
}

export const Stat: React.FunctionComponent<IData> = ({ data }) => {
  return (
    <ul className={s.statList}>
      {data.map(({ id, label, percentage }) => (
        <Stats key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  );
};