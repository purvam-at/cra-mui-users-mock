import React, { useState } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
interface IProps {
	steps: string[];
	nonLinear?: boolean;
	content: (active: number, next: () => void, prev: () => void, setActive: (n: number) => void) => void;
}
//import StepLabel from '@material-ui/core/StepLabel';

const StepperComp: React.SFC<IProps> = (props): JSX.Element => {
	const [active, setActive] = useState(0);
	const next = () => setActive(active + 1);
	const prev = () => setActive(active - 1);
	const handleStep = (step: number) => () => {
		setActive(step);
	};
	//const setActiveScreen = (screenNum: number) => setActive(screenNum);
	return (
		<React.Fragment>
			<Stepper nonLinear={props.nonLinear} activeStep={active} alternativeLabel style={{ width: '100%' }}>
				{props.steps.map((label: string, index: number) => {
					return (
						<Step key={label}>
							{/* <StepLabel>{label}</StepLabel> */}
							<StepButton onClick={handleStep(index)}>{label}</StepButton>
						</Step>
					);
				})}
			</Stepper>
			{props.content(active, next, prev, setActive)}
		</React.Fragment>
	);
};

StepperComp.defaultProps = {
	nonLinear: false
};

export default StepperComp;
