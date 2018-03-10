import React from 'react'
import { VictoryChart, VictoryGroup, VictoryBar, VictoryAxis, VictoryTooltip } from "victory"

export default class SampleData extends React.Component {
    constructor() {
      super();
      this.state = {};
    }

    render () {
      // UserEntries.findAll({where: {user: 1, title: 'Did yoga'}})
      // UserEntries.findAll({where: {user: 1, title: 'Read a book'}})
      let actions = [
        {'month': 'Jan', 'Did yoga': 15, 'Read a book': 6},
        {'month': 'Feb', 'Did yoga': 8, 'Read a book': 9},
        {'month': 'Mar', 'Did yoga': 5, 'Read a book': 0}
      ];

      let months = []
      actions.forEach(action => months.push(action.month))


      return (
        <div id="actions">
          <div className="chart-header">Past 5 months - Had caffeine, Had breakfast, Had headache</div>

          <VictoryChart viewBox={"0 0 500 300"}>
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
                data={actions}
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
                data={actions}
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
                data={actions}
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
