import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Icon,
  Collapse,
  Box,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';
import { useDrawerContext } from '../../contexts';
import { DrawerOption, DrawerTopic } from '../../shared';
import { scrollTo } from '../../services';

interface DrawerListItemProps {
  items: DrawerTopic;
  open: boolean;
  drawerColor?: string;
  onClick?: () => void;
}

export const DrawerListItem = ({
  items,
  open,
  onClick,
  drawerColor,
}: DrawerListItemProps) => {
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();
  const [openSubItems, setOpenSubItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!isDrawerOpen) {
      const listItem: DrawerOption[] = [];
      Object.keys(items).forEach((topic) => {
        items[topic].forEach(({ label, icon, path }) => {
          listItem.push({
            icon,
            label,
            path,
          });
        });
      });
    }
  }, [isDrawerOpen, items]);

  const handleClick = (to: string) => {
    return () => {
      scrollTo(to);
      onClick?.();
    };
  };

  const handleToggleSubItems = (key: string) => {
    setOpenSubItems((prevOpenSubItems) => ({
      ...prevOpenSubItems,
      [key]: !prevOpenSubItems[key],
    }));
  };

  return (
    <Box>
      {isDrawerOpen &&
        Object.keys(items).map((topic) => (
          <div key={topic}>
            {items[topic].length === 1 ? (
              items[topic].map(({ label, icon, path }) => (
                <ListItem key={label} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    onClick={
                      isDrawerOpen ? handleClick(path) : toggleDrawerOpen
                    }
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 2 : 'auto',
                        justifyContent: 'center',
                        color: drawerColor ? drawerColor : 'black',
                      }}
                    >
                      <Icon>{icon}</Icon>
                    </ListItemIcon>
                    <ListItemText
                      primary={label}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))
            ) : (
              <>
                <ListItemButton onClick={() => handleToggleSubItems(topic)}>
                  <ListItemIcon>
                    <Icon>{items[topic][0].icon}</Icon>
                  </ListItemIcon>
                  <ListItemText primary={topic} sx={{ marginLeft: -2 }} />
                  {openSubItems[topic] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openSubItems[topic]} timeout="auto" unmountOnExit>
                  {items[topic].map(({ label, icon, path }) => (
                    <ListItem
                      key={label}
                      disablePadding
                      sx={{ display: 'block' }}
                    >
                      <ListItemButton
                        onClick={
                          isDrawerOpen ? handleClick(path) : toggleDrawerOpen
                        }
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? 'initial' : 'center',
                          pl: 4,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 2 : 'auto',
                            justifyContent: 'center',
                          }}
                        >
                          <Icon>{icon}</Icon>
                        </ListItemIcon>
                        <ListItemText
                          primary={label}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </Collapse>
              </>
            )}
          </div>
        ))}
    </Box>
  );
};
