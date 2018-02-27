import React from 'react'
import { VictoryChart, VictoryLine, VictoryTheme, VictoryZoomContainer } from "victory"

export default class MyData extends React.Component {
    constructor() {
      super();
      this.state = {
        zoomDomain: { x: [new Date(2018, 1, 1), new Date(2018, 1, 23)] }
      };
    }

    handleZoom(domain) {
      this.setState({ zoomDomain: domain });
    }

    render () {
      const userData = [
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
        {'date': new Date(2018, 1, 23), 'Had caffeine': 1, 'Had alcohol': 1, 'Had headache': 0}
      ]
      return (
        <div>
          <div className="chart-header">All Actions</div>
          <VictoryChart width={600} height={470} scale={{ x: "time" }}
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
        </VictoryChart>
        </div>
      )
    }

}
