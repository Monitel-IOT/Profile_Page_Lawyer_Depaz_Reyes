import React from 'react';
import classNames from 'classnames';

interface TitleProps {
	children?: React.ReactNode;
	variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; 
	className?: string
}

const Title = ({ variant , children, className }: TitleProps) => {
	const Tag = variant || 'h2';
	return (
    <Tag className={classNames(className, {
			[`text-[24px] md:text-[42px]`]: variant === 'h1',
			[`text-[19px] md:text-[36px]`]: variant === 'h2',
			[`text-lg md:text-[30px]`]: variant === 'h3',
			[`text-lg md:text-[20px]`]: variant === 'h4',
			[`text-base md:text-base`]: variant === 'h5',
			[`text-base md:text-sm`]: variant === 'h6',
		})}>
      {children}
    </Tag>
  )
}

export default Title;


