import React, { Component } from 'react';
import { ResponsivePie } from '@nivo/pie';
import EllipsisText from "react-ellipsis-text";
import { Tooltip } from 'react-tooltip'

class PieChartWithLegend extends Component {
    state = {
        data: [
            { id: "python", label: "Python", value: 355, color: "hsl(105, 70%, 50%)", legend: "Python: 355" },
            {
                id: "javascript",
                label: "JavaScript",
                value: 500,
                color: "hsl(56, 70%, 50%)",
                legend: "this is a very long text"
            },
            { id: "ruby", label: "Ruby", value: 200, color: "hsl(10, 70%, 50%)", legend: "Ruby: 200" },
        ]
    };

    render() {
        const { data } = this.state;

        return (
            <div style={{ height: "500px" }}>
                <ResponsivePie
                    data={data}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    colors={{ datum: 'data.color' }}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                    enableRadialLabels={false}
                    enableSlicesLabels={false}
                    // ... other chart properties
                />
                <CustomLegend data={data} />
                <Tooltip id="my-tooltip" />
            </div>
        );
    }
}

const CustomLegend = ({ data }) => (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {data.map(item => (
            <div key={item.id} style={{ margin: '0 10px' }} data-tooltip-id="my-tooltip"
                 data-tooltip-content={item.legend}>
                <span style={{
                    backgroundColor: item.color,
                    width: '20px',
                    height: '20px',
                    display: 'inline-block',
                    marginRight: '5px'
                }}></span>
                <EllipsisText text={item.legend} length={"20"} />

            </div>
        ))}
    </div>
);

export default PieChartWithLegend;
