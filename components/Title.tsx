import React, { ReactNode } from 'react'

interface TitleProps  {
	children: ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children })  => {
	return (
		<h1 className="text-Blue-500 font-bold text-6xl text-center">
			{ children }
		</h1>
	)
}