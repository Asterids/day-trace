import React from 'react'
import { VictoryChart, VictoryGroup, VictoryBar, VictoryTooltip } from "victory"

export default class MyData extends React.Component {
    constructor() {
      super();
      this.state = {
        zoomDomain: { x: [new Date(2018, 0, 1), new Date(2018, 2, 5)] }
      };
    }

    handleZoom(domain) {
      this.setState({ zoomDomain: domain });
    }

    render () {
      const userData = [
        {'date': new Date(2018, 0, 1), 'Had caffeine': 0, 'Had alcohol': 1, 'Had headache': 0},
        {'date': new Date(2018, 0, 2), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 0, 3), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 1},
        {'date': new Date(2018, 0, 4), 'Had caffeine': 0, 'Had alcohol': 1, 'Had headache': 1},
        {'date': new Date(2018, 0, 5), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 0, 6), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 0, 7), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 0, 8), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 0, 9), 'Had caffeine': 1, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 0, 10), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 0, 11), 'Had caffeine': 1, 'Had alcohol': 1, 'Had headache': 0},
        {'date': new Date(2018, 0, 12), 'Had caffeine': 1, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 0, 13), 'Had caffeine': 0, 'Had alcohol': 1, 'Had headache': 0},
        {'date': new Date(2018, 0, 14), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 1},
        {'date': new Date(2018, 0, 15), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 0, 16), 'Had caffeine': 1, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 0, 17), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 0, 18), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 0, 19), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 0, 20), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 0, 21), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 0, 22), 'Had caffeine': 0, 'Had alcohol': 1, 'Had headache': 0},
        {'date': new Date(2018, 0, 23), 'Had caffeine': 1, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 0, 24), 'Had caffeine': 1, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 0, 25), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 0, 26), 'Had caffeine': 1, 'Had alcohol': 1, 'Had headache': 0},
        {'date': new Date(2018, 0, 27), 'Had caffeine': 1, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 0, 28), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 0, 29), 'Had caffeine': 1, 'Had alcohol': 1, 'Had headache': 1},
        {'date': new Date(2018, 0, 30), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 0, 31), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 1, 1), 'Had caffeine': 1, 'Had alcohol': 1, 'Had headache': 0},
        {'date': new Date(2018, 1, 2), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 1, 3), 'Had caffeine': 0, 'Had alcohol': 1, 'Had headache': 0},
        {'date': new Date(2018, 1, 4), 'Had caffeine': 1, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 1, 5), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 1, 6), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 1},
        {'date': new Date(2018, 1, 7), 'Had caffeine': 1, 'Had alcohol': 1, 'Had headache': 0},
        {'date': new Date(2018, 1, 8), 'Had caffeine': 1, 'Had alcohol': 0, 'Had headache': 1},
        {'date': new Date(2018, 1, 9), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 1, 10), 'Had caffeine': 1, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 1, 11), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 1, 12), 'Had caffeine': 0, 'Had alcohol': 1, 'Had headache': 0},
        {'date': new Date(2018, 1, 13), 'Had caffeine': 1, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 1, 14), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 1, 15), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 1, 16), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 1},
        {'date': new Date(2018, 1, 17), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 1, 18), 'Had caffeine': 0, 'Had alcohol': 1, 'Had headache': 0},
        {'date': new Date(2018, 1, 19), 'Had caffeine': 1, 'Had alcohol': 1, 'Had headache': 0},
        {'date': new Date(2018, 1, 20), 'Had caffeine': 1, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 1, 21), 'Had caffeine': 1, 'Had alcohol': 1, 'Had headache': 0},
        {'date': new Date(2018, 1, 22), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 1, 23), 'Had caffeine': 1, 'Had alcohol': 1, 'Had headache': 0},
        {'date': new Date(2018, 1, 24), 'Had caffeine': 1, 'Had alcohol': 1, 'Had headache': 0},
        {'date': new Date(2018, 1, 25), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 1, 26), 'Had caffeine': 0, 'Had alcohol': 1, 'Had headache': 0},
        {'date': new Date(2018, 1, 27), 'Had caffeine': 1, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 1, 28), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 2, 1), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 0},
        {'date': new Date(2018, 2, 2), 'Had caffeine': 0, 'Had alcohol': 1, 'Had headache': 0},
        {'date': new Date(2018, 2, 3), 'Had caffeine': 0, 'Had alcohol': 0, 'Had headache': 1},
        {'date': new Date(2018, 2, 4), 'Had caffeine': 1, 'Had alcohol': 0, 'Had headache': 1},
        {'date': new Date(2018, 2, 5), 'Had caffeine': 1, 'Had alcohol': 0, 'Had headache': 0}
      ]

      // let months = userData.forEach()
      let caffeine = [
        {'month': 'January', 'Had caffeine': 9, 'label': 'Had caffeine'},
        {'month': 'February', 'Had caffeine': 12, 'label': 'Had caffeine'},
        {'month': 'March', 'Had caffeine': 2, 'label': 'Had caffeine'}
      ];

      let alcohol = [
        {'month': 'January', 'Had alcohol': 7, 'label': 'Had alcohol'},
        {'month': 'February', 'Had alcohol': 10, 'label': 'Had alcohol'},
        {'month': 'March', 'Had alcohol': 1, 'label': 'Had alcohol'}
      ];

      let headache = [
        {'month': 'January', 'Had headache': 4, 'label': 'Had headache'},
        {'month': 'February', 'Had headache': 3, 'label': 'Had headache'},
        {'month': 'March', 'Had headache': 2, 'label': 'Had headache'}
      ];

      let months = []
      caffeine.forEach(action => months.push(action.month))

      // for each month, for each field, sum occurrences


      return (
        <div id="actions">
          <div className="chart-header">All Actions</div>
          {/* <VictoryChart width={600} height={470} scale={{ x: "time" }}
            containerComponent={
              <VictoryZoomContainer
                zoomDimension="x"
                zoomDomain={this.state.zoomDomain}
                onZoomDomainChange={this.handleZoom.bind(this)}
              />
            }
          >
            <VictoryLine
              style={{
                  data: { stroke: "tomato" }
                }}
              data={userData}
              x = 'date'
              y = 'Had caffeine'
            />
        </VictoryChart> */}
          <VictoryChart viewBox={"0 0 500 300"}>
            <VictoryGroup offset={20}
              categories={{x: months}}
              colorScale={["purple", "orange", "tomato"]}
            >
              <VictoryBar
                labelComponent={<VictoryTooltip
                  cornerRadius={2}
                  pointerLength={4}
                />}
                data={caffeine}
                x = 'month'
                y = 'Had caffeine'
              />
              <VictoryBar
                labelComponent={<VictoryTooltip
                  cornerRadius={2}
                  pointerLength={4}
                />}
                data={alcohol}
                x = 'month'
                y = 'Had alcohol'
              />
              <VictoryBar
                labelComponent={<VictoryTooltip
                  cornerRadius={2}
                  pointerLength={4}
                />}
                data={headache}
                x = 'month'
                y = 'Had headache'
              />
            </VictoryGroup>
          </VictoryChart>
        </div>
      )
    }

}
