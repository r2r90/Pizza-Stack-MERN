import pizzaMenu from "@app/mocks/pizza.json";
import { MenuItem } from "../menu_item/menu-item.component";

export const MenuList = () => {
  return (
    <div className="flex flex-wrap gap-10">
      {pizzaMenu.map((pizza) => (
        <MenuItem {...pizza} imagePath={`/assets/pizza/${pizza.image}`} />
      ))}
    </div>
  );
};
