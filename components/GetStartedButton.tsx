import React, { ReactNode } from 'react'

export const GetStartedButton: React.FC = () => {
	return (
		<div className="w-[100%] flex justify-center mb-10">
			<button 
				className="text-white bg-Red-500 py-3 px-6 text-sm font-medium rounded-[50px] shadow-md"
			>
				Get Started
			</button>
		</div>
	)
}