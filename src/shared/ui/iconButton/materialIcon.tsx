import React from 'react';

import DashboardOutlined from '@material-ui/icons/DashboardOutlined';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarmOutlined';
import DescriptionOutlined from '@material-ui/icons/DescriptionOutlined';
import PeopleOutlined from '@material-ui/icons/PeopleOutlined';
import StarsOutlined from '@material-ui/icons/StarsOutlined';
import AddToQueueOutlined from '@material-ui/icons/AddToQueueOutlined';
import MemoryOutlined from '@material-ui/icons/MemoryOutlined';
import HowToRegOutlined from '@material-ui/icons/HowToRegOutlined';
import PersonOutlined from '@material-ui/icons/PersonOutlined';
import ViewAgendaOutlined from '@material-ui/icons/ViewAgendaOutlined';
import ViewModuleOutlined from '@material-ui/icons/ViewModuleOutlined';
import ViewListOutlined from '@material-ui/icons/ViewListOutlined';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import SchoolOutlined from '@material-ui/icons/SchoolOutlined';
import AccountBoxOutlined from '@material-ui/icons/AccountBoxOutlined';
import DomainOutlined from '@material-ui/icons/DomainOutlined';
import ClassOutlined from '@material-ui/icons/ClassOutlined';
import InsertDriveFileOutlined from '@material-ui/icons/InsertDriveFileOutlined';
import ChromeReaderModeOutlined from '@material-ui/icons/ChromeReaderModeOutlined';
import AllInboxOutlined from '@material-ui/icons/AllInboxOutlined';
import AssessmentOutlined from '@material-ui/icons/AssessmentOutlined';
import SubjectOutlined from '@material-ui/icons/SubjectOutlined';
import CheckCircleOutlined from '@material-ui/icons/CheckCircleOutlined';
import FolderSharedOutlined from '@material-ui/icons/FolderSharedOutlined';
import GroupAddOutlined from '@material-ui/icons/GroupAddOutlined';
import CompareArrowsOutlined from '@material-ui/icons/CompareArrowsOutlined';
import ListAltOutlined from '@material-ui/icons/ListAltOutlined';
import FontDownloadOutlined from '@material-ui/icons/FontDownloadOutlined';
import BubbleChartOutlined from '@material-ui/icons/BubbleChartOutlined';
import LocationCityOutlined from '@material-ui/icons/LocationCityOutlined';
import ImportContactsOutlined from '@material-ui/icons/ImportContactsOutlined';
import SettingsOutlined from '@material-ui/icons/Settings';
import PersonAddOutlined from '@material-ui/icons/PersonAddOutlined';
import AssignmentOutlined from '@material-ui/icons/AssignmentOutlined';
import QuestionAnswerOutlined from '@material-ui/icons/QuestionAnswerOutlined';
import LockOutlined from '@material-ui/icons/LockOutlined';
import AssignmentIndOutlined from '@material-ui/icons/AssignmentIndOutlined';

export const materialIcon = (icon: string): JSX.Element => {
	switch (icon) {
		case 'SchoolOutlined':
			return <SchoolOutlined />;
		case 'AccountBoxOutlined':
			return <AccountBoxOutlined />;
		case 'DomainOutlined':
			return <DomainOutlined />;
		case 'ClassOutlined':
			return <ClassOutlined />;
		case 'InsertDriveFileOutlined':
			return <InsertDriveFileOutlined />;
		case 'ChromeReaderModeOutlined':
			return <ChromeReaderModeOutlined />;
		case 'AllInboxOutlined':
			return <AllInboxOutlined />;
		case 'AssessmentOutlined':
			return <AssessmentOutlined />;
		case 'SubjectOutlined':
			return <SubjectOutlined />;
		case 'CheckCircleOutlined':
			return <CheckCircleOutlined />;
		case 'FolderSharedOutlined':
			return <FolderSharedOutlined />;
		case 'GroupAddOutlined':
			return <GroupAddOutlined />;
		case 'CompareArrowsOutlined':
			return <CompareArrowsOutlined />;
		case 'ListAltOutlined':
			return <ListAltOutlined />;
		case 'AccessAlarmIcon':
			return <AccessAlarmIcon />;
		case 'DashboardOutlined':
			return <DashboardOutlined />;
		case 'DescriptionOutlined':
			return <DescriptionOutlined />;
		case 'PeopleOutlined':
			return <PeopleOutlined />;
		case 'StarsOutlined':
			return <StarsOutlined />;
		case 'AddToQueueOutlined':
			return <AddToQueueOutlined />;
		case 'MemoryOutlined':
			return <MemoryOutlined />;
		case 'HowToRegOutlined':
			return <HowToRegOutlined />;
		case 'PersonOutlined':
			return <PersonOutlined />;
		case 'ViewAgendaOutlined':
			return <ViewAgendaOutlined />;
		case 'ViewModuleOutlined':
			return <ViewModuleOutlined />;
		case 'ViewListOutlined':
			return <ViewListOutlined />;
		case 'HomeOutlined':
			return <HomeOutlined />;
		case 'FontDownloadOutlined':
			return <FontDownloadOutlined />;
		case 'BubbleChartOutlined':
			return <BubbleChartOutlined />;
		case 'LocationCityOutlined':
			return <LocationCityOutlined />;
		case 'ImportContactsOutlined':
			return <ImportContactsOutlined />;
		case 'SettingsOutlined':
			return <SettingsOutlined />;
		case 'PersonAddOutlined':
			return <PersonAddOutlined />;
		case 'AssignmentOutlined':
			return <AssignmentOutlined />;
		case 'QuestionAnswerOutlined':
			return <QuestionAnswerOutlined />;
		case 'LockOutlined':
			return <LockOutlined />;
		case 'AssignmentIndOutlined':
			return <AssignmentIndOutlined />;
		default:
			return <AssignmentIndOutlined />;
	}
};
