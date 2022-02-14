import React from "react";

function DescriptionList() {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="bg-light rounded h-100 p-4">
          <h6 className="mb-4">Description List</h6>
          <dl className="row mb-0">
            <dt className="col-sm-4">Description lists</dt>
            <dd className="col-sm-8">
              A description list is perfect for defining terms.
            </dd>

            <dt className="col-sm-4">Term</dt>
            <dd className="col-sm-8">Definition for the term.</dd>

            <dt className="col-sm-4">Another term</dt>
            <dd className="col-sm-8">
              This definition is short, so no extra paragraphs or anything.
            </dd>

            <dt className="col-sm-4 text-truncate">
              Truncated term is truncated
            </dt>
            <dd className="col-sm-8">
              This can be useful when space is tight. Adds an ellipsis at the
              end.
            </dd>

            <dt className="col-sm-4">Nesting</dt>
            <dd className="col-sm-8">
              <dl className="row">
                <dt className="col-sm-4">Nested list</dt>
                <dd className="col-sm-8">Nested definition list.</dd>
              </dl>
            </dd>
          </dl>
        </div>
      </div>
    </>
  );
}

export default DescriptionList;
