import {reduce} from 'lodash';
import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
} from 'recharts';
import {properCase} from '../util';

function AttributeGraph({attributes}) {

  const data = reduce(attributes, (result, value, attribute) => {
    return result.concat({
      attribute: properCase(attribute),
      value,
      max: 10
    });
  }, []);

  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={600}
      height={500}
      data={data}
    >
      <Radar
        dataKey="value"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
        isAnimationActive={false}
      />
      <PolarGrid />
      <PolarAngleAxis dataKey="attribute" />
    </RadarChart>
  );
}

export default AttributeGraph;
