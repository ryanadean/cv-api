import React, { Component } from 'react';
import '../css/cv.css';
import FontAwesome from 'react-fontawesome';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export const References = React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        return (
            <div>
                <h3><FontAwesome name="check-square-o" inverse /> References</h3>
                <br />
                {this.props.references.map(function (ref, i) {
                    return ( 
                        <div key={'reference-' + i}>
                            <h5>{ref.get('name')}</h5> 
                            <h5><small className="text-muted">{ref.get('title')} - {ref.get('company')}</small></h5>
                            <h6><FontAwesome name="envelope" /> {ref.get('email')}</h6>
                            <blockquote>
                              <p className="m-b-0">"{ref.get('quote')}"</p>
                            </blockquote>
                        </div> 
                    )
                })}
            </div>
        )
    }
});
export default References;