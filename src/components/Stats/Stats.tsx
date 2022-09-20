import s from './Stats.module.css';
import random from "../randomFolder/randomColor.js"
import React from 'react';

interface IProp {
  label: string;
  percentage: number;
}

export const Stats = ({
  label,
  percentage,
}:IProp):JSX.Element => {
  return (
    <li className={s.item} style={{ backgroundColor: `${random()}` }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
    </li>
  );
};

