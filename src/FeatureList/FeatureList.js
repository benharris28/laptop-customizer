import React from 'react';
import OptionCard from '../OptionCard/OptionCard';
import slugify from 'slugify';



class FeatureList extends React.Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            
            const options = this.props.features[feature].map(item => {
              const itemHash = slugify(JSON.stringify(item));
              return (
                <OptionCard 
                    {...item} itemHash={itemHash}/>
              );
            });
        
      
            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                {options}
              </fieldset>
            );
          });

        return (
            <div>{features}</div>
        )
            
        
    
}
}

export default FeatureList;