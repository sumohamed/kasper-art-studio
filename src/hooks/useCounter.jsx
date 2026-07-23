import { useEffect, useState } from "react";

const useCounter = (target) => {
	// Store the current displayed number
	const [count, setCount] = useState(0);

	useEffect(() => {
		// Run a repeated timer every 20ms
		const interval = setInterval(() => {
			setCount((prev) => {
				// Stop counting when the target is reached
				if (prev >= target) {
					clearInterval(interval);
					return target;
				}

				// Increase the current value by 1
				return prev + 1;
			});
		}, 20);

		// Clean up the interval when the component unmounts
		// or when the target changes
		return () => clearInterval(interval);
	}, [target]);

	// Return the current count value
	return count;
};

export default useCounter;
