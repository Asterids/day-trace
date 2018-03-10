import React from 'react'
import { VictoryChart, VictoryGroup, VictoryBar, VictoryAxis, VictoryTooltip } from "victory"

export default class SampleData extends React.Component {
    constructor() {
      super();
      this.state = {};
    }

    render () {
      let sampleActions = [
        {'month': 'Nov', 'Had caffeine': 14, 'Had breakfast': 15, 'Had headache': 2},
        {'month': 'Dec', 'Had caffeine': 8, 'Had breakfast': 18, 'Had headache': 0},
        {'month': 'Jan', 'Had caffeine': 9, 'Had breakfast': 7, 'Had headache': 4},
        {'month': 'Feb', 'Had caffeine': 12, 'Had breakfast': 10, 'Had headache': 3},
        {'month': 'Mar', 'Had caffeine': 2, 'Had breakfast': 1, 'Had headache': 2}
      ];

      let months = []
      sampleActions.forEach(action => months.push(action.month))


      return (
        <div className="barchart">
          <div className="chart-header">Past 5 months - Frequency of Had caffeine, Had breakfast, Had headache</div>

          <VictoryChart viewBox={"0 0 500 250"}>
            <VictoryGroup offset={12}
              categories={{x: months}}
              colorScale={["purple", "orange", "tomato"]}
            >
              <VictoryBar
                labels={(d) => {
                  const action = Object.keys(d)[4]
                  return d[action] === 1 ? `${action}: 1 day` : `${action}: ${d[action]} days`
                }}
                labelComponent={<VictoryTooltip
                  cornerRadius={2}
                  pointerLength={4}
                />}
                data={sampleActions}
                x = 'month'
                y = 'Had caffeine'
              />
              <VictoryBar
                labels={(d) => {
                  const action = Object.keys(d)[5]
                  return d[action] === 1 ? `${action}: 1 day` : `${action}: ${d[action]} days`
                }}
                labelComponent={<VictoryTooltip
                  cornerRadius={2}
                  pointerLength={4}
                />}
                data={sampleActions}
                x = 'month'
                y = 'Had breakfast'
              />
              <VictoryBar
                labels={(d) => {
                  const action = Object.keys(d)[6]
                  return d[action] === 1 ? `${action}: 1 day` : `${action}: ${d[action]} days`
                }}
                labelComponent={<VictoryTooltip
                  cornerRadius={2}
                  pointerLength={4}
                />}
                data={sampleActions}
                x = 'month'
                y = 'Had headache'
              />
            </VictoryGroup>
            <VictoryAxis
              label="Months"
              style={{
                axisLabel: { padding: 35 }
              }}
             />
              <VictoryAxis dependentAxis
                label="Days"
                style={{
                  axisLabel: { padding: 35 }
                }}
              />
          </VictoryChart>

        </div>
      )
    }

}
