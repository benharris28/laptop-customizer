import React from 'react';
import slugify from 'slugify';



// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});


class OptionCard extends React.Component {
    
    render() {
        const { itemHash, feature, item, selected } = this.props;
        console.log(feature);

        return (
            
                    

                    <div key={itemHash} className="feature__item">
                      <input
                        type="radio"
                        id={itemHash}
                        className="feature__option"
                        name={slugify(feature)}
                        checked={item.name === selected[feature].name}
                        onChange={e => this.props.handleUpdateFeature(feature, item)}
                      />
                      <label htmlFor={itemHash} className="feature__label">
                        {item.name} ({USCurrencyFormat.format(item.cost)})
                      </label>
                    </div>
                
               

        )
                    
        
    
}
    }


export default OptionCard;