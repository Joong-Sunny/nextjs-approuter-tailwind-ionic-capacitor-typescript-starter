'use client';

import React from 'react';
import classNames from 'classnames';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

const Card: React.FC<CardProps> = ({ children, className, ...props }) => (
  <div {...props} className={classNames('max-w-xl', className)}>
    <div className="bg-white shadow-md rounded-b-xl dark:bg-black">{children}</div>
  </div>
);

export default Card;
