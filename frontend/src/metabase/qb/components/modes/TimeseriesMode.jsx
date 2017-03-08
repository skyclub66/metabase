/* @flow */

import React, { Component, PropTypes } from "react";

import VisualizationPicker from "metabase/qb/components/VisualizationPicker";
import CustomizeSettingsWidget
    from "metabase/qb/components/CustomizeSettingsWidget";
import TimeseriesGroupingWidget
    from "metabase/qb/components/TimeseriesGroupingWidget";

import SidebarSection from "metabase/qb/components/sidebar/SidebarSection";

import UnderlyingDataAction from "../actions/UnderlyingDataAction";
import UnderlyingRecordsAction from "../actions/UnderlyingRecordsAction";
import TimeseriesFilterDrill from "../actions/TimeseriesFilterDrill";

import { getTimeseriesParameters } from "metabase/meta/Parameter";

export const ModeSidebarFooter = props => (
    <SidebarSection className="flex align-center">
        <VisualizationPicker
            {...props}
            visualizations={["line", "area", "bar"]}
        />
        <div className="ml-auto">
            <CustomizeSettingsWidget {...props} />
        </div>
    </SidebarSection>
);

export const ModeFooter = props => {
    return (
        <div className="flex layout-centered">
            <TimeseriesGroupingWidget {...props} />
        </div>
    );
};

export default {
    name: "timeseries",

    ModeFooter,
    ModeSidebarFooter,

    getModeParameters(card, tableMetadata) {
        return getTimeseriesParameters(card, tableMetadata);
    },

    getSidebarActions() {
        return [UnderlyingDataAction, UnderlyingRecordsAction];
    },

    getDrillThroughActions() {
        return [TimeseriesFilterDrill];
    }
};
