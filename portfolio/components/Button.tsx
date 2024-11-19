'use client';
import React from 'react';
import { ButtonProps } from '../type';
import Image from 'next/image';

const Button = ({ title, onClick, className, icon }: ButtonProps) => {
  return (
    <button className={className}  onClick={() => {
      if (onClick) {
        onClick();
      }
    }}>
      {icon && <Image src={`/${icon}.svg`} className='inline mr-4' alt={title} width={40} height={40} />}
      {title}
    </button>
  );
};

export default Button;
