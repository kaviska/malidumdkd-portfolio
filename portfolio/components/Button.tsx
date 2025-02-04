'use client';
import React, { useState } from 'react';
import { ButtonProps } from '../type';
import Image from 'next/image';

const Button = ({ title, onClick, className, icon, iconTwo }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={className}
      onClick={() => onClick && onClick()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && (
        <Image
          src={`/${isHovered && iconTwo ? iconTwo : icon}.svg`}
          className="inline mr-4"
          alt={title}
          width={30}
          height={30}
        />
      )}
      {title}
    </button>
  );
};

export default Button;
