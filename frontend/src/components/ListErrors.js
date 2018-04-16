import React from "react";

class ListErrors extends React.Component {
  render() {
    const errors = this.props.errors;
    if (errors) {
      return (
        <ul className="error-messages col-lg-12">
          <li className="col-lg-6 right">Invalid credential!</li>
          {
            // Object.keys(errors).map(key => {
            //   return (
            //     <li key={key}>
            //       {errors[key]}
            //     </li>
            //   );
            // })
          }
        </ul>
      );
    } else {
      return null;
    }
  }
}

export default ListErrors;
