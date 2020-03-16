import React from 'react';
import UseBattery from './UseBattery';
import UseGeolocation from './UseGeolocation';
import UseHoverAndUseHoverDirty from './UseHoverAndUseHoverDirty';
import UseIdle from './UseIdle';
import UseKey from './UseKey';
import UseLocation from './UseLocation';
import UseMedia from './UseMedia';
import UseMouseAndUseMouseHovered from './UseMouseAndUseMouseHovered';
import UseNetwork from './UseNetwork';
import UsePageLeave from './UsePageLeave';
import UseScroll from './UseScroll';
import UseScrolling from './UseScrolling';
import UseSize from './UseSize';
import UseStartTyping from "./UseStartTyping";
import UseWindowScroll from "./UseWindowScroll";
import UseMeasure from "./UseMeasure";

function ReactUse() {
    return (
        <React.Fragment>
            <UseBattery />
            <UseGeolocation />
            <UseHoverAndUseHoverDirty />
            <UseIdle />
            <UseKey />
            <UseLocation />
            <UseMedia />
            <UseMouseAndUseMouseHovered />
            <UseNetwork />
            <UsePageLeave />
            <UseScroll />
            <UseScrolling />
            <UseSize />
            <UseStartTyping />
            <UseWindowScroll />
            <UseMeasure />
        </React.Fragment>
    )
}

export default ReactUse;
