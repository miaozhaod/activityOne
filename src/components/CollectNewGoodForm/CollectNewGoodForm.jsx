import React from "react";
import "./CollectNewGoodForm.css";

export default function CollectNewGoodForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="collect-form">
      <section className="collect-form__input-container">
        <div>
          <label htmlFor="id">ID</label>
          <input type="number" id="id" name="id" placeholder="e.g. 7" />
        </div>
        <div>
          <label htmlFor="type">Type</label>
          <input type="text" id="type" name="type" placeholder="e.g. muffin" />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="e.g. dessert" />
        </div>
        <div>
          <label htmlFor="topping">Topping</label>
          <input type="text" id="topping" name="topping" />
        </div>
      </section>
      <button type="submit" className="add-button">
        Add a New Item
      </button>
      <p className="hint">
        If you have issues on adding new items, please refresh the page and try
        again. Thank you!
      </p>
    </form>
  );
}
