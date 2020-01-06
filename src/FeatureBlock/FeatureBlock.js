import React from 'react';
import slugify from 'slugify';
import OptionCard from '../OptionCard/OptionCard';






class FeatureBlock extends React.Component {
    render() {
        const options = this.props.features[this.props.feature]
        .map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
                <OptionCard 
                    key={this.props.key}
                    itemHash={itemHash}
                    item={item}
                    features={this.props.features}
                    selected={this.props.selected}
                    feature={this.props.feature}
                    handleUpdateFeature={this.props.handleUpdateFeature}
                />
            )
    });

    return (
        <fieldset className="feature" key={this.props.key}>
          <legend className="feature__name">
            <h3>{this.props.feature}</h3>
          </legend>
          {options}
        </fieldset>
    )
}
}

export default FeatureBlock;
            