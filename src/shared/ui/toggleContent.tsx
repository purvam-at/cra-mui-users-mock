/**
 * Author - Vinay
 * This component is to be used when we need to show/hide a component
 * 
 * Source - https://wecodetheweb.com/2019/03/02/easy-modals-with-react-hooks/
 * 
 * Example usage of this component
 * <ToggleContent
        toggle={show => (
            <IconButton
                iconType="delete"
                fontSize="small"
                areaLabel="Delete"
                onIconClick={show}
            />
        )}
        content={hide => (
            <ConfirmationDialog
                open={true}
                confirmDelete={hide}
                cancelDelete={hide}
                module={'Hello world'}
                title="Client"
            />
        )}
    />
 */

import React, { useState } from 'react';

type Toggle = (a: () => void) => JSX.Element;

interface IProps {
	toggle: Toggle;
	content: Toggle;
}

const ToggleContent: React.SFC<IProps> = ({ toggle, content }): JSX.Element => {
	const [isShown, setIsShown] = useState(false);
	const hide = () => setIsShown(false);
	const show = () => setIsShown(true);

	return (
		<>
			{toggle(show)}
			{isShown && content(hide)}
		</>
	);
};

export default ToggleContent;
