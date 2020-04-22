import React from 'react';
import _ from 'lodash';

import {htmlToReact} from '../utils';
import ActionLink from './ActionLink';

export default class SectionItems extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        return (
            <section id={_.get(section, 'section_id')} className="block items-block outer">
              <div className="inner-large">
                <div className="grid">
                    TODO
                </div>
              </div>
            </section>
        );
    }
}
