import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditExpensePage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.expense
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdate(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
        <h1>Edit Expense</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Category: (required)</label>
            <input
              className="form-control"
              name="category"
              value={this.state.formData.category}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Name of Item: (required)</label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Cost: $</label>
            <input
              className="form-control"
              name="cost"
              value={this.state.formData.cost}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-xs"
            disabled={this.state.invalidForm}
          >
            SAVE EXPENSE
          </button>&nbsp;&nbsp;
          <Link to='/'>CANCEL</Link>
        </form>
      </>
    );
  }
}
export default EditExpensePage;