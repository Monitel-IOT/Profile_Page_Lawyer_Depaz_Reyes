import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

interface IconButtonProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
}

const IconButton = ({ children, className, href, target }: IconButtonProps) => {
  const Tag = href === undefined ? 'button' : Link;
  return (
    <Tag className={classNames(className, {})} href={href ?? ""} target={target}>
      {children}
    </Tag>
  );
};

export default IconButton;
