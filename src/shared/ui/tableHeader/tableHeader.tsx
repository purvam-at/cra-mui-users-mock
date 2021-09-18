import React from 'react';
import { TableRows } from 'shared/interface/interfaces';
import { TableCell, TableHead, TableRow } from '@material-ui/core';

export interface IHeader {
	title: string;
	align?: 'inherit' | 'left' | 'center' | 'right' | 'justify' | undefined;
}

interface IProps {
	tableHeader: IHeader[];
}

const TableHeader: React.SFC<IProps> = (props): JSX.Element => {
	const getTableHeaderRows = (): TableRows => {
		const data = props.tableHeader.map((header: IHeader, index: number) => {
			return (
				<TableCell key={index} align={header.align}>
					{header.title}
				</TableCell>
			);
		});
		return data;
	};

	return (
		<TableHead>
			<TableRow>{getTableHeaderRows()}</TableRow>
		</TableHead>
	);
};

export default TableHeader;
