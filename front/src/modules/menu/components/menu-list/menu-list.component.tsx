import { MenuItem } from "@app/modules/menu/components/menu_item/menu-item.component";
import { FC } from "react";
import { Pizza } from "../../types/pizza";

interface MenuListProps {
  items:Pizza []
}

export const MenuList: FC<MenuListProps> = ({items}) => {
  return (
    <div className="flex flex-wrap gap-10">
      {items.map((pizza) => (
        <MenuItem
          {...pizza}
          imagePath={`/assets/pizza/${pizza.image}`}
          key={`pizza-${pizza.id}`}
        />
      ))}
    </div>
  );
};
