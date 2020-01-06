import React from 'react';


import FeatureBlock from '../FeatureBlock/FeatureBlock';



class FeatureList extends React.Component {
    render() {
        const features = Object.keys(this.props.features)
        .map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
                <FeatureBlock
                    {...feature}
                    feature={feature}
                    features={this.props.features}
                    selected={this.props.selected}
                    key={featureHash}
                    handleUpdateFeature={this.props.handleUpdateFeature}
                    />
            )
        })

        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    }
}
            
            
            
            
        
      
     
        
    


export default FeatureList;