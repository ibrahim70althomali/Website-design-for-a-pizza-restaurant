import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";
//  اعطينا صوره وسوينا  فورم
function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> تواصل معنا </h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">الاسم </label>
          <input name="name" placeholder="...ادخل الاسم" type="text" />
          <label htmlFor="email">ايميل</label>
          <input name="email" placeholder="...ادخل الايميل" type="email" />
          <label htmlFor="message">الرسالة</label>
          <textarea
            rows="6"
            placeholder="... صوتك مسموع "
            name="message"
          ></textarea>
          <button type="submit"> ارسل</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;