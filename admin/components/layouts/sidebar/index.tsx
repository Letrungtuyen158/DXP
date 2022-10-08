import { ADMIN_ROLE, MENU } from "constants/sidebar.constant";
import { Menu, MenuList } from "./_component";
import React from "react";

function Sidebar({ roles = [] }: { roles: any }) {
  let isAdmin = roles?.includes(ADMIN_ROLE);

  return (
    <>
      {MENU?.map((item: any, index: number) => {
        if (item.onlyAdmin && !isAdmin) return null;

        return (
          <Menu menuName={item.name} key={index}>
            <MenuList menuList={item.subs} />
          </Menu>
        );
      })}
    </>
  );
}

export default Sidebar;
