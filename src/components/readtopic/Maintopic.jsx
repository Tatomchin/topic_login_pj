import React from "react";

export default function Maintopic() {
  return (
    <div>
      <h3>Topic Name</h3>
      <p>by : UserName</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum
        dolor sit amet ligula ullamcorper iaculis. Nam et scelerisque quam. Duis
        eget interdum metus. Nulla at ante dignissim, sollicitudin nibh vitae,
        egestas lacus. Aliquam id ullamcorper dui. Nullam vel sagittis mauris.
        Duis ac eros pellentesque, volutpat orci scelerisque, fermentum velit.
      </p>
      <div className="p-3 position-relative">
        <button className="btn btn-light position-absolute bottom-0 end-0">
          Edit
        </button>
      </div>
    </div>
  );
}
