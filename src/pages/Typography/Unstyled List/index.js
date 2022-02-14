import React from "react";

function UnstyledList() {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="bg-light rounded h-100 p-4">
          <h6 className="mb-4">Unstyled List</h6>
          <ul className="list-unstyled mb-0">
            <li>This is a list.</li>
            <li>It appears completely unstyled.</li>
            <li>Structurally, it's still a list.</li>
            <li>
              However, this style only applies to immediate child elements.
            </li>
            <li>
              Nested lists:
              <ul>
                <li>are unaffected by this style</li>
                <li>will still show a bullet</li>
                <li>and have appropriate left margin</li>
              </ul>
            </li>
            <li>This may still come in handy in some situations.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default UnstyledList;
