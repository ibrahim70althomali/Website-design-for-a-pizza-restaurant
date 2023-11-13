import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

// هنا وش هدف منها ذي الصفحه اول  شي تريب الصفحه وبعدها سوينا ماب عادي تلف علي عناصر ابوجكت ولازم تعرف ملف ابوجبت 
//  key={key} مالها هدف ولا تاثير في شي بس رياكت يطلعك خطا او ماجيب البيانات 
function Menuaa() {
  return (
    <div className="menu">
      <h1 className="menuTitle">القائمة الطعام</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menuaa;