import React from 'react'

export default function Topic() {
  return (
    <div className="d-inline-block bg-secondary text-white mt-3 p-3 rounded position-relative">
        <h4>Topic 1</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          condimentum dolor sit amet ligula ullamcorper iaculis. Nam et
          scelerisque quam. Duis eget interdum metus. Nulla at ante dignissim,
          sollicitudin nibh vitae, egestas lacus. Aliquam id ullamcorper dui.
          Nullam vel sagittis mauris. Duis ac eros pellentesque, volutpat orci
          scelerisque, fermentum velit.
        </p>
        <div className="p-3 position-relative">
          <button className="btn btn-light position-absolute bottom-0 end-0">
            Read more...
          </button>
        </div>
      </div>
  )
}
