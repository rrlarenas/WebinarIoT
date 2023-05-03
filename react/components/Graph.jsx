import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import Highcharts from 'highcharts';
import highchartsMore from "highcharts/highcharts-more.js"
import solidGauge from "highcharts/modules/solid-gauge.js";
import HighchartsReact from 'highcharts-react-official';
import graphOptions from './data/graphConfig'
import IrisDataContext from '../context/IrisDataContext'
import Spinner from "./shared/Spinner";
import Card from "./shared/Card";

highchartsMore(Highcharts);
solidGauge(Highcharts);

function Graph({ metrica }) {
  const { irisData, isLoading, fetchData, fetchLastData} = useContext(IrisDataContext)
  // eslint-disable-next-line 
  const [time, setTime] = useState(Date.now());
  const [tendencia, setTendencia] = useState(false)


  const vMet = metrica === 'temperatura'
    ?
    { Metrica: 'Temperatura', UdM: '°C' }
    :
    { Metrica: 'Humedad', UdM: '%' }

  const navigate = useNavigate()

  useEffect(() => {
    //Refresh Interval
    const interval = setInterval(() => setTime(Date.now()), 3000);
    return () => {
      clearInterval(interval);
      tendencia ? fetchData(vMet.Metrica, 35000) : fetchLastData(vMet.Metrica)
    };
    // eslint-disable-next-line 
  }, [navigate, time, tendencia])


  if (isLoading) {
    return <Spinner />
  }
  else {

    const handleOnChange = (e) => {
      e.target.checked === true ? setTendencia(true) : setTendencia(false)

    }

    const title = irisData[0].Metrica.toString().charAt(0).toUpperCase() + irisData[0].Metrica.toString().slice(1)
    const userOffset = new Date().getTimezoneOffset() * 60 * 1000

    const graphValues = []
    irisData.forEach(element => {

      !tendencia ? graphValues.push(Number(element.Valor)) : graphValues.push([new Date(element.TimeStamp).getTime() - userOffset, Number(element.Valor)])

    });

    //console.log(graphValues)

    const options = graphOptions(tendencia ? 'spline' : 'gauge',
      title,
      vMet.UdM,
      graphValues)

    // if (!tendencia) {

    // }

    return (
      <>
        <Card>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </Card>
        <Card>
          <div> <p className='note-head'>Tendencia
            <label className="switch">
              <input type="checkbox" onClick={handleOnChange} />
              <span className="slider round">  </span>
            </label>
          </p>
          </div>
        </Card>
        <Card>
          <div> <p className='note-head'>{tendencia ? 'Rango' : 'Actualizado'}
            <label className="" >
              {!tendencia ? new Date(irisData[0].TimeStamp).toLocaleString('es-CL')
                :
                (' del ' + new Date(irisData[0].TimeStamp).toLocaleString('es-CL') +
                  '  al  ' + new Date(irisData[irisData.length - 1].TimeStamp).toLocaleString('es-CL')
                )}
            </label>
          </p>
          </div>

        </Card>
      </>
    )
  }
}

export default Graph