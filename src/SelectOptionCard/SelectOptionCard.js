import React from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  
class SelectOptionCard extends React.Component {
    render() {
        const { key, feature, selectedOption } = this.props;
        return (
            <div className="summary__option" key={key}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
        )
    }
}

export default SelectOptionCard;