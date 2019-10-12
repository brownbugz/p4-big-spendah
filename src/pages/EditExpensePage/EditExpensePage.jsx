import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './EditExpensePage.css';

class EditExpensePage extends Component {
  state = {
    invalidForm: false,
    cost: "",
    category: "",
    name: ""
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdate({
      id: this.props.match.params.id,
      cost: this.state.cost,
      category: this.state.category,
      name: this.state.name,
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    console.log(this.props)
    return (
      <>
        <h2>Edit Expense</h2>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="edit-label">Category: (required)</label>
            <input
              className="form-control"
              name="category"
              // value={this.state.formData.category}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="edit-label">Name of Item: (required)</label>
            <input
              className="form-control"
              name="name"
              // value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="edit-label">Cost: $</label>
            <input
              className="form-control"
              name="cost"
              // value={this.state.formData.cost}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success btn-xs"
            disabled={this.state.invalidForm}
          >
            SAVE EXPENSE
          </button>&nbsp;&nbsp;
          <Link to='/expenses'>CANCEL</Link>
        </form>
      </>
    );
  }
}
export default EditExpensePage;