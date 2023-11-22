import React from 'react';
import classNames from 'classnames';

interface TextProps {
	children?: React.ReactNode;
	variant?: '2xs' | 'xs' | 'sm' | 'base' | 'lg' | 'xl'; 
	className?: string
}

const Text = ({ variant , children, className }: TextProps) => {
	return (
    <p className={classNames(className, {
			['text-[14px] md:text-[18px]']: variant === "sm",
			['text-[12px] md:text-[15px]']: variant === "xs",
			/* ['text-xs']: variant === 'xs',
			['text-sm']: variant === 'sm',
			['text-base']: variant === 'base',
			['text-lg']: variant === 'lg',
			['text-xl']: variant === 'xl', */
		})}>
      {children}
    </p>
  )
}

export default Text;

