import React, {useEffect, useState} from 'react';


export const App = () => {
	// Ham useState nhan vao mot tham so la gia tri ban dau
	// cua state , tra ve mot cap [value, handler] chua gia tri
	// current state, va handler de change value this state
	const [storyIds, setStoryIds] = useState([]);

	// Similar   componentDidMount and componentDidUpdate
	useEffect(() => {
		setStoryIds('hello');
	}, []);
	return (
		<p> {storyIds} </p>
	)
}

// LifeCycle component in react
//Initialization: setup props and state
//Mounting: componentWillMount -> render -> componentDidMount
//Update: componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate
		// stateComponentUpdate -> ComponentWillUpdate -> render -> componentDidUpdate
//Unmounting: componentWillUnmount



