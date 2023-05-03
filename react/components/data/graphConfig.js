import Highcharts from "highcharts";

function graphOptions(type, title, label, values) {
  if (type === "gauge") {
    return {
      chart: {
        type: type,
        animation: true
      },

      title: {
        text: title,
      },
      subtitle: {
        text: "Lectura más reciente",
      },

      pane: {
        startAngle: -150,
        endAngle: 150,

        background: [
          {
            backgroundColor: "#FFF",
          },
        ],
      },

      // the value axis
      yAxis: {
        min: label === "°C" ? -10 : 0,
        max: label === "°C" ? 50 : 100,

        title: {
          text: label,
        },
        plotBands: [
          {
            from: label === "°C" ? -10 : 0,
            to: label === "°C" ? 10 : 33,
            color: "#34d8eb", // green
          },
          {
            from: label === "°C" ? 10 : 33,
            to: label === "°C" ? 30 : 66,
            color: "#47cc16", // yellow
          },
          {
            from: label === "°C" ? 30 : 66,
            to: label === "°C" ? 50 : 100,
            color: "#cc1616", // red
          },
        ],
        labels: {
            format: "{value} ",
          }
      },
      tooltip: {
        shared: true,
        formatter: function () {
          return (
            "<b>" + title + " actual <b><br/>:<i>" + this.y + "</i> " + label
          );
        },
        color: label === "°C" ? "#A00" : "#0A0",
      },
      series: [
        {
          name: title,
          animation: false,
          data: [values],
          tooltip: {
            valueSuffix: label,
          },
          color: label === "°C" ? "#A00" : "#0A0",
        },
      ],
    };
  } else {
    return {
      chart: {
        type: type,
        inverted: false,
        animation: true
      },
      title: {
        text: "Tendencia de " + title,
      },
      subtitle: {
        text: "Últimas lecturas",
      },
      pane: {
        background: [
          {
            backgroundColor: "#FFF",
          },
        ],
      },
      xAxis: {
        labels: {
          format: "{value: %H:%M:%S}",
          rotation: -45,
        }
      },

      yAxis: {
        min: label === "°C" ? -10 : 0,
        max: label === "°C" ? 50 : 100,
        title: {
          text: title,
        },
        labels: {
          format: "{value} " + label,
        },
        lineWidth: 1,
        plotBands: [],
      },
      tooltip: {
        xDateFormat: "%Y-%m-%d",
        shared: true,
        formatter: function () {
          return (
            "<b>" +
            title +
            "</b><br/>" +
            "<i>" +
            this.y +
            label +
            " </i> <br/>" +
            Highcharts.dateFormat("%d/%m/%Y %H:%M:%S", new Date(this.x))
          );
        },
        color: label === "°C" ? "#A00" : "#0A0",
      },

      series: [
        {
          name: title,
          animation: false,
          data: values,
          color: label === "°C" ? "#B00" : "#0A0",
        },
      ],
    };
  }
}
export default graphOptions;
