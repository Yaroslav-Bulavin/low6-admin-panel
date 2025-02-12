import React from 'react';

import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import { ContestType } from '@/types';

import { RoutesEnum } from '@/enums/routes.enum';

import { createPath } from '@/routes/util';

interface ContestsTableActionsMenuProps {
  contest: ContestType;
}
export const ContestsTableActionsMenu: React.FC<
  ContestsTableActionsMenuProps
> = ({ contest }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(
      createPath({ path: RoutesEnum.contest, params: { id: contest.id } }),
    );
  };
  const handleDeleteClick = () => {};

  return (
    <Menu>
      <MenuButton
        aria-label='Actions'
        as={IconButton}
        icon={<BsThreeDotsVertical />}
      />

      <MenuList>
        <MenuItem onClick={handleEditClick}>Edit</MenuItem>
        <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
      </MenuList>
    </Menu>
  );
};
