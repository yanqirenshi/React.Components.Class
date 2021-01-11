import React from 'react';

import {
    Panel
} from 'react-bulma-components';

import DiagramClassAttributes from './DiagramClass/DiagramClassAttributes.js';
import DiagramClassMethods from './DiagramClass/DiagramClassMethods.js';

export default function DiagramClass (props) {
    const data = props.data;

    return (
        <Panel>
          <Panel.Header>{data.name}</Panel.Header>

          <Panel.Block>
            <DiagramClassAttributes attributes={data.attributes}/>
          </Panel.Block>

          <Panel.Block>
            <DiagramClassMethods methods={data.methods} />
          </Panel.Block>
        </Panel>
    );
}
