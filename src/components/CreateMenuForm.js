import React, { PropTypes } from 'react'

const CreateMenuForm = (props) => {
  return (
    <form>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" placeholder="Title" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputFile">File input</label>
          <input type="file" id="exampleInputFile" />
          <p className="help-block">Example block-level help text here.</p>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" /> Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
  )
}

export default CreateMenuForm
