import React, { PropTypes } from 'react'

const CreateMenuForm = (props) => {
  return (
    <form className="form-horizontal col-sm-8">
        <div className="form-group">
          <label htmlFor="inputTitle" className="col-sm-2 control-label">Title</label>
          <div className="col-sm-6">
            <input type="text" className="form-control" id="inputTitle" placeholder="Title" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputPrice" className="col-sm-2 control-label">Price</label>
          <div className="col-sm-6">
            <input type="text" className="form-control" id="inputPrice" placeholder="Price" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="textareaDescription" className="col-sm-2 control-label">Description</label>
          <div className="col-sm-6">
            <textarea className="form-control" id="textareaDescription" placeholder="." />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputImageUrl" className="col-sm-2 control-label">Image URL</label>
          <div className="col-sm-6">
            <input type="text" className="form-control" id="inputImageUrl" placeholder="Image URL" />
          </div>
        </div>
        <fieldset>
          <div className="form-group">
            <label htmlFor="inputItem1" className="col-sm-2 control-label">Item 1</label>
            <div className="col-sm-6">
              <input type="text" className="form-control" id="inputItem1" placeholder="" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputItem1Ingredients" className="col-sm-2 control-label">Ingredients</label>
            <div className="col-sm-6">
              <input type="text" className="form-control" id="inputItem1Ingredients" placeholder="" />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="inputItem2" className="col-sm-2 control-label">Item 2</label>
            <div className="col-sm-6">
              <input type="text" className="form-control" id="inputItem2" placeholder="" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputItem2Ingredients" className="col-sm-2 control-label">Ingredients</label>
            <div className="col-sm-6">
              <input type="text" className="form-control" id="inputItem2Ingredients" placeholder="" />
            </div>
          </div>
        </fieldset>
        <button class="btn btn-default"
          onClick={() => {
            console.log(this.refs);
          }}
          >Submit</button>
    </form>
  )
}

export default CreateMenuForm
