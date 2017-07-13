import React from 'react';

import styles from './widgets-list-item.component.css';

export default class WidgetsListItem extends React.Component {

  editItem = () => {
    this.props.actions.setEditWidget(this.props.id);
  }

  deleteItem = ()  => {
    this.props.actions.deleteWidget(this.props.id)
  }

  render() {
    return <tr className={styles['item']}>
      <td>{this.props.name}</td>
      <td>{this.props.quantity}</td>
      <td>${this.props.unitPrice}</td>
      <td>${this.props.unitPrice * this.props.quantity}</td>
      <td className={styles['center']}><button className="btn btn-sm btn-primary" onClick={this.editItem}>Edit</button></td>
      <td className={styles['center']}><button className="btn btn-sm btn-danger" onClick={this.deleteItem}>Delete</button></td>
    </tr>
  }
}
