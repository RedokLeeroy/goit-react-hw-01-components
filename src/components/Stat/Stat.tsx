import s from './Stat.module.css';
import { Stats } from '../Stats/Stats';
import React from 'react';

interface IData {
  id:string,
  label: string,
  percentage: number
}

interface IProp {
  data: IData[];
}

export const Stat = ({ data }:IProp):JSX.Element => {
  return (
    <ul className={s.statList}>
      {data.map(({ id, label, percentage }) => (
        <Stats key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  );
};