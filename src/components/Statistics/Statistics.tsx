import s from './Statistics.module.css';
import React from 'react';

interface IProp {
  title: string;
  children: JSX.Element;
}

export const Statistics: React.FunctionComponent<IProp> = ({
  title,
  children,
}) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </section>
  );
};

