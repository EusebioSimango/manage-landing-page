import React, { ReactNode } from 'react'

interface IProps  {
	children: ReactNode;
}

export const Title: React.FC<IProps> = ({ children })  => {
	return (
		<h1 className="text-Blue-500 leading-[1.3] font-medium text-3xl md:text-6xl text-center">
			{ children }
		</h1>
	)
}

export const Paragraph: React.FC<IProps> = ({ children }) => {
	return <p className="text-Blue-300 text-center leading-[1.3] md:text-3xl font-regular py-6">{ children }</p>
}