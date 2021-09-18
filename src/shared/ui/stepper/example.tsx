/**
 * Summary : User Component for user module
 *
 * Description.
 *
 * @file   user.tsx
 * @author Aakash.
 * @since  25/9/2019
 */

import React from 'react';
import GridHeader from 'shared/ui/grid/gridHeader';
import Stepper from 'shared/ui/stepper/stepper';

// Props type for User Component
interface IProps {}
// State type for User Component
interface IState {
	//selectedToInvite: number[]; // ids of selected users to invite
}

// Class representing a User Component
class User extends React.Component<IProps, {}> {
	render() {
		const steps = ['Verify Mobile No.', 'Verify Email Id', 'Set Password'];

		const getScreens = (active: number, next: () => void, prev: () => void) => {
			const screens: JSX.Element[] = [
				<GridHeader key={1} title="screen 1" btnText="Create Partner" handleBtnClick={next} />,
				<GridHeader key={1} title="screen 2" btnText="Create Partner" handleBtnClick={next} />,
				<GridHeader key={1} title="screen 3" btnText="Create Partner" handleBtnClick={prev} />
			];

			return screens[active];
		};
		return (
			<React.Fragment>
				<Stepper
					steps={steps}
					content={(active, next, prev) => (
						<React.Fragment>
							<div
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									display: 'flex',
									height: '50vh'
								}}
							>
								<div>{getScreens(active, next, prev)}</div>
							</div>
						</React.Fragment>
					)}
				/>
			</React.Fragment>
		);
	}
}

export default User;
