import React from "react";

function AddFishForm(props) {
  const nameRef = React.createRef();
  const priceRef = React.createRef();
  const statusRef = React.createRef();
  const descRef = React.createRef();
  const imageRef = React.createRef();

  function createFish(event) {
    // 1. Stop the form from submitting
    event.preventDefault();
    const fish = {
      name: nameRef.current.value,
      price: parseFloat(priceRef.current.value),
      status: statusRef.current.value,
      desc: descRef.current.value,
      image: imageRef.current.value,
    };
    props.addFish(fish);
    // Refresh the form
    event.currentTarget.reset();
  }
  return (
    <form className="fish-edit" onSubmit={createFish}>
      <input name="name" ref={nameRef} type="text" placeholder="Name" />
      <input name="price" ref={priceRef} type="text" placeholder="Price" />
      <select name="status" ref={statusRef}>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea name="desc" ref={descRef}></textarea>
      <input name="image" ref={imageRef} type="text" placeholder="Image" />
      <button type="submit">+ Add Fish</button>
    </form>
  );
}

export default AddFishForm;
