import React from 'react';
import { WidgetsListItem, WidgetEdit } from '../';

import styles from './widgets-list.component.css';

export default class WidgetsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      totalPrice: this.getTotalPrice(this.props.widgets)
    }
  }

  componentWillReceiveProps(nextProps) {

    this.setState(
      {
        totalPrice: this.getTotalPrice(nextProps.widgets)
      }
    )
  }

  getTotalPrice(widgets) {
    return widgets.reduce((acc, widget) => {
      return acc + parseInt(widget.unitPrice) * parseInt(widget.quantity)
    }, 0)
  }

  getWedgitsRows() {
    const { setEditWidget, updateWidget, deleteWidget } = this.props.actions;
    const actions = { setEditWidget, updateWidget, deleteWidget };
    return this.props.widgets.map( (widget, index) => {
      const props = {
        ...widget,
        actions
      }
      return this.props.editedWidgetId === widget.id ?
      <WidgetEdit key={widget.id} {...props} /> :
      <WidgetsListItem key={widget.id} {...props} />
    })
  }

  render() {
    return this.props.widgets.length > 0 ?
      <div className={styles['list']}>
        <p>You have {this.props.widgets.length} widget{this.props.widgets.length>1 ? 's' : ''} in your list</p>
        <table className={styles['table']}>
          <thead className={styles['table-th']}>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.getWedgitsRows()}
          </tbody>
          <tfoot>
            <tr className={styles['footer']}>
              <td colSpan="3" className={styles['right']}>Total:</td>
              <td colSpan="3">${this.state.totalPrice}</td>
            </tr>
          </tfoot>
        </table>
      </div> :
      <div className={styles['list']}>
        <p>No widgets yet!</p>
      </div>
  }
}
